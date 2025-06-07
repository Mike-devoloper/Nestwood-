import { useMutation, useReactiveVar } from "@apollo/client";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Divider, Pagination, Rating, Stack, TextField } from "@mui/material"
import { userVar } from "apollo/store";
import { CREATE_COMMENT } from "apollo/user/mutation";
import { REACT_APP_API_URL } from "libs/config";
import { CommentGroup } from "libs/enums/comment.enum";
import { Message } from "libs/enums/common.enum";
import { sweetErrorHandling } from "libs/sweetAlert";
import { Comment, Comments } from "libs/types/comments/comment";
import CommentsInquiry from "libs/types/comments/comment.input";
import { Product } from "libs/types/property/property";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment"
import { ApolloQueryResult } from '@apollo/client';

interface CommentInput {
    commentGroup: CommentGroup;
    commentContent: string;
    commentRefId: string;
  };

  

interface ReviewsProps {
    productComment: Comment[];
    refetchComment: (variables: { input: CommentsInquiry }) => Promise<ApolloQueryResult<any>>;
    product: Product | null;
    commentTotal: number;
    commentInquiry: CommentsInquiry;
}
const Reviews = (props: ReviewsProps) => {
    const [ value, setValue] = useState<null | number>()
    const router = useRouter();
	const user = useReactiveVar(userVar);
    const { productComment, product, commentTotal, refetchComment, commentInquiry} = props;
    const [insertCommentData, setInsertCommentData] = useState<CommentInput>({
		commentGroup: CommentGroup.PRODUCT,
		commentContent: '',
		commentRefId: '',
	});

    //Mutation
    const [createComment] = useMutation(CREATE_COMMENT)

    //Lifecycles
    useEffect(() => {
        if (router.query.id) {
          setInsertCommentData({
            ...insertCommentData,
            commentRefId: router.query.id as string,
          });
        }
      }, [router]);

      //Handlers
      

      const createCommentHandler = async () => {
        try {
          if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);
          await createComment({variables: {input: insertCommentData}});
          setInsertCommentData({...insertCommentData, commentContent: ''})
          await refetchComment({input: commentInquiry})
        } catch (err: any) {
          await sweetErrorHandling(err)
        }
      }
      
      


    const imagePath: string = productComment[0]?.memberData?.memberImage
		? `${REACT_APP_API_URL}/${productComment[0]?.memberData?.memberImage}`
		: '/img/profile/defaultUser.svg';
    return (
        <TabPanel value={"2"}>
             <Stack className="container">
                <Stack className="right-box">
                    <div className="text">{commentTotal} reviews for {product?.productName}</div>
                    <Stack className="review-container">
                        {productComment?.map((comment: Comment) => {
                            return ( <Stack className="review-box">
                            <img  className="avatar" src={imagePath} alt="avatar" />
                           <Stack className="review-info">
                               <Box className="review-text">
                                   <Box className={"rating"} sx={{ '& > legend': { mt: 4 } }}>
                                       <Rating
                                       name="simple-controlled"
                                       sx={{color:"orange", fontSize: "18px"}}
                                       value={value}
                                       onChange={(event, newValue) => {
                                       setValue(newValue);
                                       }}
                                   /></Box>
                                   <Box className="date-box">
                                       <div className="memberName">{comment.memberData?.memberNick}</div>
                                       <Moment className="date" format={'DD MMMM, YYYY'}>{comment.createdAt}</Moment>
                                   </Box>
                                   <p className="comment">{comment.commentContent}</p>
                               </Box>
                               <Divider/>
                               
                           </Stack>
                       </Stack>)
                        })}
                   
                    </Stack>
                         <Stack spacing={2}>
                            <Pagination count={3} variant="outlined" shape="rounded" />
                        </Stack>
                </Stack>
                <Stack className="left-box">
                    <div className="text">Add a review:</div>
                    <Stack className="form-box">
                        <div className="rating">Your rating: <Rating name="size-small" defaultValue={2} size="small" /></div>
                        <p>Your review:</p>
                        <textarea placeholder="Leave a review...."  className="input" 
                        onChange={({ target: { value } }: any) => {
                            setInsertCommentData({ ...insertCommentData, commentContent: value });
                        }}
                        value={insertCommentData.commentContent}></textarea>
                        <Button className="submit-btn" onClick={createCommentHandler}>Submit</Button>
                        </Stack>
                </Stack>
             </Stack>
        </TabPanel>
    )
}

export default Reviews;