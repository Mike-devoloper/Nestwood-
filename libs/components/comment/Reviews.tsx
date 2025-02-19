import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Divider, Pagination, Rating, Stack, TextField } from "@mui/material"
import { useState } from "react";

interface ReviewsProps {
    setTab: (input: string) => void
}
const Reviews = (props: ReviewsProps) => {
    const [ value, setValue] = useState<null | number>()
    const {setTab} = props;
    return (
        <TabPanel value={"2"}>
             <Stack className="container">
                <Stack className="right-box">
                    <div className="text">2 reviews for Elephant Chair</div>
                    <Stack className="review-container">
                    <Stack className="review-box">
                         <img  className="avatar" src="/img/profile/defaultUser.svg" alt="avatar" />
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
                                    <div className="memberName">admin</div>
                                    <p className="date">- June 19, 2023</p>
                                </Box>
                                <p className="comment">If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                            </Box>
                            <Divider/>
                            
                        </Stack>
                    </Stack>

                    <Stack className="review-box">
                         <img  className="avatar" src="/img/profile/defaultUser.svg" alt="avatar" />
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
                                    <div className="memberName">admin</div>
                                    <p className="date">- June 19, 2023</p>
                                </Box>
                                <p className="comment">If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                            </Box>
                            <Divider/>
                            
                        </Stack>
                    </Stack>
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
                        <textarea placeholder="Leave a review...."  className="input"/>
                        <Button className="submit-btn">Submit</Button>
                        </Stack>
                </Stack>
             </Stack>
        </TabPanel>
    )
}

export default Reviews;