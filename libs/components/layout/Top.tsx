import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, FormControl, InputLabel, Link, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Stack } from "@mui/system"
import { useState } from "react";


const Top = () => {
    const device = useDeviceDetect()
    const [category, setCategory] = useState<string>('');

    //HANDLERS 
    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
      };
    if (device === "mobile") {
        return (
            <Stack className={"navbar"}>
                <Link href={"/"}>
                               <div>Home</div>
                            </Link>
                            <Link href={"/property"}>
                               <div>Properties</div>
                            </Link>
                            <Link href={"/agent"}>
                               <div>Agents</div>
                            </Link>
                            <Link href={"/community"}>
                               <div>Community</div>
                            </Link>
        
                            <Link href={"/cs"}>
                               <div>CS</div>
                            </Link>
            </Stack>
        )
    } 
    else {
        return (
            <Stack className={"navbar"}>
               <Stack className={"navbar-container"}>
                <Stack className={"search-container"}>
                <Box className={"logo"}>
                    <Link href={"/"}>
                    <img src="/img/logo/favicon.svg" alt="logo" />
                    </Link>
                    <div className="title">Nestwood</div>
                </Box>
                <Box className={"search"}>
                    <input type="text" name="search" id="search-filter" placeholder="Search products..."/>
                    <button className="search-btn">Search</button>
                </Box>
                <Box className={"basket-box"}>
                    <img src="/img/icons/basket.svg" alt="basket" />
                </Box>
                <Box className={"user-box"}>
                <Link href={'/account/join'}>
					<div className={'join-box'}>
						<AccountCircleOutlinedIcon />
							<span>
								{('Login')} / {('Register')}
						    </span>
					</div>
				</Link>
                </Box>
                </Stack>
                <Stack className={"navbar-bottom"}>
                    <Box component={'div'} className={'selector'}>
                      <FormControl sx={{ width: 200, height: 20 }} size="small">
                        <InputLabel className="label">Shop by Category</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            className="custom-select"
                            value={category}
                            label="Category"
                            IconComponent={ViewHeadlineIcon}
                            onChange={handleChange}>
                                 <MenuItem value="" disabled>
                                    Shop by Category
                                </MenuItem>             
                            <MenuItem value={"Chair"}  className="menu-item-text">Chair</MenuItem>
                            <MenuItem value={"Dining Table"}  className="menu-item-text">Dining Table</MenuItem>
                            <MenuItem value={"Round Table"}  className="menu-item-text">Round Table</MenuItem>
                            <MenuItem value={"Sofa-Bed"}  className="menu-item-text">Sofa-Bed</MenuItem>
                            <MenuItem value={"Wardrobe"}  className="menu-item-text">Wardrobe</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                     <Box component={'div'} className={'router-box'}>
							<Link href={'/'}>
								<div>{('Home')}</div>
							</Link>
							<Link href={'/products'}>
								<div>{('Products')}</div>
							</Link>
							<Link href={'/agent'}>
								<div> {('Agents')} </div>
							</Link>
							<Link href={'/blog?articleCategory=FREE'}>
								<div> {('Blogs')} </div>
							</Link>
							
								<Link href={'/mypage'}>
									<div> {('My Page')} </div>
								</Link>
					
							<Link href={'/cs'}>
								<div> {('CS')} </div>
							</Link>
					 </Box>
                     {/* <div className={'lan-box'}>
								{user?._id && <NotificationsOutlinedIcon className={'notification-icon'} />}
								<Button
									disableRipple
									className="btn-lang"
									onClick={langClick}
									endIcon={<CaretDown size={14} color="#616161" weight="fill" />}
								>
									<Box component={'div'} className={'flag'}>
										{lang !== null ? (
											<img src={`/img/flag/lang${lang}.png`} alt={'usaFlag'} />
										) : (
											<img src={`/img/flag/langen.png`} alt={'usaFlag'} />
										)}
									</Box>
								</Button>

								<StyledMenu anchorEl={anchorEl2} open={drop} onClose={langClose} sx={{ position: 'absolute' }}>
									<MenuItem disableRipple onClick={langChoice} id="en">
										<img
											className="img-flag"
											src={'/img/flag/langen.png'}
											onClick={langChoice}
											id="en"
											alt={'usaFlag'}
										/>
										{t('English')}
									</MenuItem>
									<MenuItem disableRipple onClick={langChoice} id="kr">
										<img
											className="img-flag"
											src={'/img/flag/langkr.png'}
											onClick={langChoice}
											id="uz"
											alt={'koreanFlag'}
										/>
										{t('Korean')}
									</MenuItem>
									<MenuItem disableRipple onClick={langChoice} id="ru">
										<img
											className="img-flag"
											src={'/img/flag/langru.png'}
											onClick={langChoice}
											id="ru"
											alt={'russiaFlag'}
										/>
										{t('Russian')}
									</MenuItem>
								</StyledMenu>
					</div> */}
                </Stack>
               </Stack>
            </Stack>
            )
    }
}

export default Top;