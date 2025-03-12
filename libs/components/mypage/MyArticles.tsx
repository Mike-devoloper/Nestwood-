import React, { useState } from 'react';
import { NextPage } from 'next';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Pagination, Stack, Typography } from '@mui/material';
import CommunityCard from '../common/CommunityCard';

const MyArticles: NextPage = () => {
	const device = useDeviceDetect();
	// const user = useReactiveVar(userVar);
	// const [searchCommunity, setSearchCommunity] = useState({
	// 	...initialInput,
	// 	search: { memberId: user._id },
	// });
	const [boardArticles, setBoardArticles] = useState<number[]>([1,2,3]);
	// const [totalCount, setTotalCount] = useState<number>(0);

	// /** APOLLO REQUESTS **/
	// const [likeTargetBoardArticle] = useMutation(LIKE_TARGET_BOARD_ARTICLE);

	// const {
	// 	loading: boardArticlesLoading,
	// 	data: boardArticleData,
	// 	error: getBoardArticleError,
	// 	refetch: boardArticlesRefetch,
	// } = useQuery(GET_BOARD_ARTICLES, {
	// 	fetchPolicy: 'network-only',
	// 	variables: { input: searchCommunity },
	// 	notifyOnNetworkStatusChange: true,
	// 	onCompleted: (data: T) => {
	// 		setBoardArticles(data.getBoardArticles?.list);
	// 		setTotalCount(data.getBoardArticles?.metaCounter?.[0]?.total);
	// 	},
	// });

	/** HANDLERS **/
	// const paginationHandler = (e: T, value: number) => {
	// 	setSearchCommunity({ ...searchCommunity, page: value });
	// };

	// const likeArticleHandler = async (e:any, user: T, id: string) => {
	// 	try {
	// 	  e.stopPropagation();
	// 			if (!id) return;
	// 			if (!user._id) throw new Error(Messages.error2);
	// 			await likeTargetBoardArticle({ variables: { input: id } });
	// 			await boardArticlesRefetch({ input: searchCommunity });
	// 			await sweetTopSmallSuccessAlert('succes', 800);
	// 		} catch (err: any) {
	// 			console.log('Error, likePropertyHandler:', err.message);
	// 			sweetMixinErrorAlert(err.message).then();
	// 		}
	// 	};

	if (device === 'mobile') {
		return <>ARTICLE PAGE MOBILE</>;
	} else
		return (
			<div id="my-articles-page">
				<Stack className="main-title-box">
					<Stack className="right-box">
						<Typography className="main-title">Article</Typography>
						<Typography className="sub-title">We are glad to see you again!</Typography>
					</Stack>
				</Stack>
				<Stack className="article-list-box">
					{boardArticles?.length > 0 ? (
						boardArticles?.map((boardArticle, index) => {
							return <CommunityCard key={boardArticle}/>;
						})
					) : (
						<div className={'no-data'}>
							<img src="/img/icons/icoAlert.svg" alt="" />
							<p>No Articles found!</p>
						</div>
					)}
				</Stack>

			
					<Stack className="pagination-conf">
						<Stack className="pagination-box">
							<Pagination
								count={2}
								page={2}
								shape="circular"
								color="primary"
								
							/>
						</Stack>
						<Stack className="total">
							<Typography>Total 2 article(s) available</Typography>
						</Stack>
					</Stack>
			
			</div>
		);
};



export default MyArticles;
