import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";
import { Box, Divider, Link, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useState } from "react";


const Community: NextPage = () => {
  const device = useDeviceDetect()
  const [posts, setPosts] = useState<number[]>([1, 2, 3, 4])
  const [articles, setArticles] = useState<number[]>([1, 2, 3, 4, 5, 6])
  if(device === "mobile") {
     return <Stack>COMMINUITY PAGE MOBILE</Stack>
  } else { 
    return (
      <Stack className="blog-page">
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
          <Stack className="card-main">
                     {articles.map((post, index) => {
                      return (
                        <Stack className="post-card"  key={index} >
                        <Box className="img-box">
                         <img src="/img/property/furni2.jpg" alt="recent-post" />
                        </Box>
                        <Box className="text">
                        <p> The Sturdy Nature of this</p>
                        <div>
                          <span className="name">By Mike</span>
                        <span>April 2, 2024</span>
                        </div>
                        </Box>
                        </Stack>
                      )
                     })}
                 <Stack className="pagination-config">
                     <Stack className="pagination-box">
                              <Pagination 
                                 page={1} 
                                 count={5} 
                                 shape="circular" 
                                 color="primary" 
                              />
                      </Stack>
                  </Stack>
            </Stack>
        </Stack>
      </Stack>
    );
  }

};

export default withLayoutBasic(Community);
