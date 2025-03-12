import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Pagination, Stack, Typography } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NextPage } from 'next';


// interface MemberFollowsProps {
// 	initialInput: FollowInquiry;
// 	subscribeHandler: any;
// 	unsubscribeHandler: any;
// 	likeMemberHandler: any;
// 	redirectToMemberPageHandler: any;
// }

const MemberFollowings:NextPage = () => {
	// const { initialInput, subscribeHandler, unsubscribeHandler, redirectToMemberPageHandler, likeMemberHandler} = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const [total, setTotal] = useState<number>(0);
	const category: any = router.query?.category ?? 'properties';
	// const [followInquiry, setFollowInquiry] = useState<FollowInquiry>(initialInput);
	// const [memberFollowers, setMemberFollowers] = useState<Follower[]>([]);
	// const user = useReactiveVar(userVar);

	/** APOLLO REQUESTS **/
	// const {
	// 	loading: getMemberFollowersLoading,
	// 	data: getMemberFollowersData,
	// 	error: getMemberFollowersError,
	// 	refetch: getMemberFollowersRefetch,
	// } = useQuery(GET_MEMBER_FOLLOWERS, {
	// 	fetchPolicy: 'network-only',
	// 	variables: { input: followInquiry },
	// 	skip: !followInquiry?.search?.followingId,
	// 	notifyOnNetworkStatusChange: true,
	// 	onCompleted: (data: T) => {
	// 		setMemberFollowers(data?.getMemberFollowers?.list);
	// 		setTotal(data?.getMemberFollowers?.metaCounter[0]?.total);
	// 	},
	// });

	/** LIFECYCLES **/
	// useEffect(() => {
	// 	if (router.query.memberId)
	// 		setFollowInquiry({ ...followInquiry, search: { followingId: router.query.memberId as string } });
	// 	else setFollowInquiry({ ...followInquiry, search: { followingId: user?._id } });
	// }, [router]);

	// useEffect(() => {
	// 	getMemberFollowersRefetch({input:followInquiry}).then()
	//   }, [followInquiry]);
	

	/** HANDLERS **/
	// const paginationHandler = async (event: ChangeEvent<unknown>, value: number) => {
	// 	followInquiry.page = value;
	// 	setFollowInquiry({ ...followInquiry });
	// };

	if (device === 'mobile') {
		return <div>NESTAR FOLLOWS MOBILE</div>;
	} else {
		return (
			<div id="member-follows-page">
				<Stack className="main-title-box">
					<Stack className="right-box">
						<Typography className="main-title">{category === 'followers' ? 'Followers' : 'Followings'}</Typography>
					</Stack>
				</Stack>
				<Stack className="follows-list-box">
					<Stack className="listing-title-box">
						<Typography className="title-text">Name</Typography>
						<Typography className="title-text">Details</Typography>
						<Typography className="title-text">Subscription</Typography>
					</Stack>
				
						{/* <div className={'no-data'}>
							<img src="/img/icons/icoAlert.svg" alt="" />
							<p>No Followers yet!</p>
						</div>
				 */}
					
						
							<Stack className="follows-card-box" >
								<Stack className={'info'}  >
									<Stack className="image-box">
										<img src={"/img/property/chair.jpg"} alt="" />
									</Stack>
									<Stack className="information-box">
										<Typography className="name">Mike</Typography>
									</Stack>
								</Stack>
								<Stack className={'details-box'}>
									<Box className={'info-box'} component={'div'}>
										<p>Followers</p>
										<span>3</span>
									</Box>
									<Box className={'info-box'} component={'div'}>
										<p>Followings</p>
										<span>4</span>
									</Box>
									<Box className={'info-box'} component={'div'}>
										
											<FavoriteIcon color="primary"  />
									
											{/* <FavoriteBorderIcon onClick={()=> likeMemberHandler(follower?.followerData?._id, getMemberFollowersRefetch, followInquiry)} /> */}
										
										<span>3</span>
									</Box>
								</Stack>
							
									<Stack className="action-box">
									
											{/* <>
												<Typography>Following</Typography>
												<Button
													variant="outlined"
													sx={{ background: '#ed5858', ':hover': { background: '#ee7171' } }}
													
												>
													Unfollow
												</Button>
											</> */}
									
											<Button
												variant="contained"
												sx={{ background: '#60eb60d4', ':hover': { background: '#60eb60d4' } }}
												
											>
												Follow
											</Button>
									
									</Stack>
								
							</Stack>
					
			
				</Stack>
				
					<Stack className="pagination-config">
						<Stack className="pagination-box">
							<Pagination
								page={3}
								count={3}
							
								shape="circular"
								color="primary"
							/>
						</Stack>
						<Stack className="total-result">
							<Typography>{total} followers</Typography>
						</Stack>
					</Stack>
			
			</div>
		);
	}
};

// MemberFollowers.defaultProps = {
// 	initialInput: {
// 		page: 1,
// 		limit: 5,
// 		search: {
// 			followingId: '',
// 		},
// 	},
// };

export default MemberFollowings;