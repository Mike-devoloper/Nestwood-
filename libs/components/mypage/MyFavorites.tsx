import React, { useState } from 'react';
import { NextPage } from 'next';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Pagination, Stack, Typography } from '@mui/material';
import { Product } from '../../types/property/property';
import { T } from '../../../libs/types/config';
import ProductCard from '../property/ProductCard';
import FavoriteCard from './FavoriteCard';
import { useMutation, useQuery } from '@apollo/client';
import { LIKE_TARGET_PRODUCT } from 'apollo/user/mutation';
import { GET_FAVORITES } from 'apollo/user/query';
import { Message } from 'libs/enums/common.enum';
import { sweetMixinErrorAlert } from 'libs/sweetAlert';




const MyFavorites: NextPage = () => {
	const device = useDeviceDetect();
	const [myFavorites, setMyFavorites] = useState<Product[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [searchFavorites, setSearchFavorites] = useState<T>({ page: 1, limit: 6 });


	const [likeTargetProperty] = useMutation(LIKE_TARGET_PRODUCT)
	/** APOLLO REQUESTS **/

	const {
		loading: getFavoritesLoading,
		error: getFavoritesError,
		data: getFavoritesData,
		refetch: getFavoritesRefetch
	} = useQuery(GET_FAVORITES, {
		fetchPolicy: "network-only",
		variables: {
			input: searchFavorites
		},
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => {
			setMyFavorites(data?.getFavorites?.list)
			setTotal(data?.getFavorites?.metaCounter?.[0]?.total || [0])
		}
	});


	/** HANDLERS **/
	const paginationHandler = (e: T, value: number) => {
		setSearchFavorites({ ...searchFavorites, page: value });
	};

	const likeProductHandler = async (user: T, id: string) => {
		try {
			if(!id) return
			if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);

			await likeTargetProperty({variables: {input: id}})
			
			await getFavoritesRefetch({input: searchFavorites})
		} catch (err: any) {
			console.log("Error, likePropertyHandler ", err.message);
			sweetMixinErrorAlert(err.message).then()
		}
	}


	if (device === 'mobile') {
		return <div>NESTAR MY FAVORITES MOBILE</div>;
	} else {
		return (
			<div id="my-favorites-page">
				<Stack className="main-title-box">
					<Stack className="right-box">
						<Typography className="main-title">My Favorites</Typography>
						<Typography className="sub-title">We are glad to see you again!</Typography>
					</Stack>
				</Stack>
				<Stack className="favorites-list-box">
					{myFavorites?.length ? (
						myFavorites?.map((product) => {
							return <ProductCard myFavorite={true} likeProductHandler={likeProductHandler} product={product}/>;
						})
					) : (
						<div className={'no-data'}>
							<img src="/img/icons/icoAlert.svg" alt="" />
							<p>No Favorites found!</p>
						</div>
					)}
				</Stack>
				{myFavorites?.length ? (
					<Stack className="pagination-config">
						<Stack className="pagination-box">
							<Pagination
								count={Math.ceil(total / searchFavorites.limit)}
								page={searchFavorites.page}
								shape="circular"
								color="primary"
								onChange={paginationHandler}
							/>
						</Stack>
						<Stack className="total-result">
							<Typography>
								Total {total} favorite propert{total > 1 ? 'ies' : 'y'}
							</Typography>
						</Stack>
					</Stack>
				) : null}
			</div>
		);
	}
};

export default MyFavorites;
