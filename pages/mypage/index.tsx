import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Box, Link, Stack } from '@mui/material';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import MyMenu from '@/libs/components/mypage/MyMenu';
import AddProduct from '@/libs/components/mypage/AddProduct';
import MyProfile from '@/libs/components/mypage/MyProfile';
import MyProducts from '@/libs/components/mypage/MyProducts';
import MyFavorites from '@/libs/components/mypage/MyFavorites';
import RecentlyVisited from '@/libs/components/mypage/RecentlyVisited';
import MemberFollowers from '@/libs/components/member/MemberFollowers';
import MyArticles from '@/libs/components/mypage/MyArticles';
import MemberFollowings from '@/libs/components/member/MemberFollowing';
import WriteArticle from '@/libs/components/mypage/WriteArticle';


// export const getStaticProps = async ({ locale }: any) => ({
// 	props: {
// 		...(await serverSideTranslations(locale, ['common'])),
// 	},
// });

const MyPage: NextPage = () => {
	const device = useDeviceDetect();
	const router = useRouter();
	const category: any = router.query?.category ?? 'myProfile';

	/** APOLLO REQUESTS **/

	if (device === 'mobile') {
		return <div>MY PAGE</div>;
	} else {
		return (
			<div id="my-page" style={{ position: 'relative' }}>
				  <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/mypage"}>MyPage / </Link>
              </Box>
              <div className="detail-title">Detail</div>
          </Stack>
				<div className="container">
					<Stack className={'my-page'}>
						<Stack className={'back-frame'}>
							<Stack className={'left-config'}>
								<MyMenu/>
							</Stack>
							<Stack className="main-config" mb={'76px'}>
								<Stack className={'list-config'}>
									{category  === 'myProducts' && <MyProducts page={0} limit={0} sort={''} search={{
										propertyStatus: ''
									}}/>}
									{category === 'addProduct' && <AddProduct />}
									{category  === 'myProfile' && <MyProfile/>}
									{category  === 'myFavorites' && <MyFavorites/>}
									{category  === 'recentlyVisited' && <RecentlyVisited/>}
									{category  === 'myArticles' && <MyArticles/>}
									{category  === 'writeArticle' && <WriteArticle/>}
									{category  === 'followers' && <MemberFollowers/>}
									{category  === 'followings' && <MemberFollowings/>}
								</Stack>
							</Stack>
						</Stack>
					</Stack>
				</div>
			</div>
		);
	}
};

export default withLayoutBasic(MyPage);
