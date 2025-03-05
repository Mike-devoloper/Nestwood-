import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Divider, Stack } from "@mui/material";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";
import Link from "next/link";

const Detail = () => {
    const [posts, setPosts] = useState<number[]>([1, 2, 3, 4]);
    return (
        <Stack className="blog-detail-page">
             <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/"}>Home / </Link>
              </Box>
              <div className="detail-title">Blog</div>
          </Stack>
           <Stack className="container">
                <Stack className="filter-main">
                    <Stack className="input-box">
                        <input type="text" placeholder="Search..." className="input" />
                        <SearchTwoToneIcon className="search-icon"/>
                    </Stack>
                    <Stack className="category-box">
                        <div className="category-text">Categories</div>
                        <Divider className="divider"/>
                        <Stack className="category">
                        <span>Beds</span>
                        <span>Bookcases</span>
                        <span>Chairs</span>
                        <span>Stools</span>
                        <span>Tables</span>
                        <span>Free</span>
                        <span>Humour</span>
                        </Stack>
                    </Stack>
                    <Stack className="recent-box">
                        <div className="recent-text">Recent posts</div>
                        <Divider className="divider"/>
                        {posts.map((post, index) => {
                        return (
                            <Stack className="recent-post-card" key={index}  >
                            <img src="/img/property/furni3.jpg" alt="recent-post" />
                            <Box className="text">
                            <p> The Sturdy Nature of this</p>
                            <span>April 2, 2024</span>
                            </Box>
                            </Stack>
                        )
                        })}
                    </Stack>
                </Stack>
                <Stack className="article-main">
                    <Box className={"img-box"}>
                        <img src="/img/property/chair.jpg" alt="article-img" />
                    </Box>
                    <Stack className="desc-main">
                        <span className="article-title">
                            Best chair for living room
                        </span>
                        <div className="info">
                            <span>posted by</span>
                            <PersonOutlineIcon className="icon"/>
                            <p className="nickname"> Mike</p>
                            <CalendarMonthIcon className="icon"/> 
                            <p >Oct 18, 2025</p>
                            <InsertCommentIcon className="icon"/>
                            <p>3 comments</p>
                            <VisibilityOutlinedIcon className="icon"/>
                            <p>3 views</p>
                        </div>
                        <p className="desc">Stay tuned for our upcoming blog posts, where well deep dive into specific aspects of the future of electronics, showcasing the latest developments, trends, and possibilities. Together, let’s unravel the potential of tomorrow’s technology and embrace the transformative power it holds for our future</p>
                    </Stack>
                    <Divider/>
                    <div className="comment-count">3 comments</div>
                    <Divider/>
                    <Stack className="comment-main">
                        <img src="/img/profile/defaultUser.svg" alt="avatar" />
                        <Box className={"text-box"}>
                            <span className="name">Mike</span>
                            <span className="date">Jan 22, 2022</span>
                            <p className="comment">It was so helpful thanks</p>
                        </Box>
                     </Stack>
                    <div className="input-box">
                        <input type="text" placeholder="Leave a comment...." />
                        <button className="post-btn">Post Comment</button>
                    </div>
                </Stack>
           </Stack>
        </Stack>
    )
}

export default withLayoutBasic(Detail);