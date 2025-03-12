import React from 'react';
import { useRouter } from 'next/router';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack, Typography } from '@mui/material';


import { useReactiveVar } from '@apollo/client';

import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// interface CommunityCardProps {
// 	boardArticle: BoardArticle;
// 	size?: string;
// 	likeArticleHandler: any;
// }

const CommunityCard = () => {
	// const { boardArticle, size = 'normal', likeArticleHandler } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	// const user = useReactiveVar(userVar);
	const imagePath: string =  '/img/community/communityImg.png';

	/** HANDLERS **/
	// const chooseArticleHandler = (e: React.SyntheticEvent, boardArticle: BoardArticle) => {
	// 	router.push(
	// 		{
	// 			pathname: '/community/detail',
	// 			query: { articleCategory: boardArticle?.articleCategory, id: boardArticle?._id },
	// 		},
	// 		undefined,
	// 		{ shallow: true },
	// 	);
	// };

	// const goMemberPage = (id: string) => {
	// 	if (id === user?._id) router.push('/mypage');
	// 	else router.push(`/member?memberId=${id}`);
	// };

	if (device === 'mobile') {
		return <div>COMMUNITY CARD MOBILE</div>;
	} else {
		return (
			<Stack
				sx={{ width: '317px' }}
				className="community-general-card-config"
				// onClick={(e) => chooseArticleHandler(e, boardArticle)}
			>
				<Stack className="image-box">
					<img src={imagePath} alt="" className="card-img" />
				</Stack>
				<Stack className="desc-box" sx={{ marginTop: '-20px' }}>
					<Stack>
						<Typography
							className="desc"
							// onClick={(e) => {
							// 	e.stopPropagation();
							// 	goMemberPage(boardArticle?.memberData?._id as string);
							// }}
						>
							Mike
						</Typography>
						<Typography className="title">Indonesia</Typography>
					</Stack>
					<Stack className={'buttons'}>
						<IconButton color={'default'}>
							<RemoveRedEyeIcon />
						</IconButton>
						<Typography className="view-cnt">4</Typography>
						<IconButton color={'default'}>
						
								{/* <FavoriteIcon color={'primary'} /> */}
						
								<FavoriteBorderIcon />
							
						</IconButton>
						<Typography className="view-cnt">2</Typography>
					</Stack>
				</Stack>
				<Stack className="date-box">
				    22
					<Typography className="day">
						Oct
					</Typography>
				</Stack>
			</Stack>
		);
	}
};

export default CommunityCard;
