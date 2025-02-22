import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Button, Checkbox, FormControlLabel, FormGroup,  Stack } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const Join:NextPage = () => {
    return (
        <Stack className={'join-page'}>
            <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/"}>Home / </Link>
              </Box>
              <div className="detail-title">My Account</div>
          </Stack>
        <Stack className={'container'}>
            <Stack className={'main'}>
                <Box className={"logo-box"}>
                     <img className={"logo"} src="/img/logo/favicon.svg" alt="favicon" />
                    <span className="title">Nestwood</span>
                </Box>
                <Stack className="input-container">
                    <p>Login</p>
                    <Stack className="input-box">
                        <span>Username</span>
                        <input type="text" required={true} />
                        <span>Password</span>
                        <input type="password" required={true} />
                    </Stack>
                    <Box className={"btn-box"}>
                    <Button variant="contained" className="btn">Login</Button>
					    <FormGroup>
						    <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me" />
						</FormGroup>
                </Box>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    );
};

export default withLayoutBasic(Join);