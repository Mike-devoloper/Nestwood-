import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { alpha, Badge, Box, Button, FormControl, InputLabel, Link, Menu, MenuItem, MenuProps, Select, SelectChangeEvent, styled } from "@mui/material";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Stack } from "@mui/system"
import { useState } from "react";



const Top = () => {
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const device = useDeviceDetect()
    const [category, setCategory] = useState<string>('');
    const languages = [
        { code: "en", label: "English", flag: "/img/flag/langen.png" },
        { code: "kr", label: "Korean", flag: "/img/flag/langkr.png" },
        { code: "ru", label: "Russian", flag: "/img/flag/langru.png" },
      ];

    //HANDLERS 
    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
      };

      const [selectedLang, setSelectedLang] = useState(languages[0]);
      const [dropdownOpen, setDropdownOpen] = useState(false);
    
      const handleLanguageChange = (lang: any) => {
        setSelectedLang(lang);
        setDropdownOpen(false); // Close dropdown on selection
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
                <Badge color="secondary" badgeContent={1}>
                    <img src="/img/icons/basket.svg" alt="basket" />
                </Badge>
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
                     <div style={{ position: "relative", display: "inline-block" }}>
                            {/* Toggle button */}
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                style={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                border: "none",
                                background: "none",
                                }}
                            >
                                <img
                                src={selectedLang.flag}
                                alt={`${selectedLang.label} flag`}
                                style={{ width: "24px", height: "17px", borderRadius: "2px", marginRight: "8px" }}
                                />
                                {selectedLang.label}
                            </button>

                            {/* Dropdown menu */}
                            {dropdownOpen && (
                                <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: "0",
                                    zIndex: 1,
                                    backgroundColor: "white",
                                    border: "1px solid #ddd",
                                    padding: "5px",
                                    width: "120px",
                                }}
                                >
                                {languages.map((lang) => (
                                    <div
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang)}
                                    style={{
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                    >
                                    <img
                                        src={lang.flag}
                                        alt={`${lang.label} flag`}
                                        style={{ width: "20px", height: "14px", marginRight: "8px" }}
                                    />
                                    {lang.label}
                                    </div>
                                ))}
                                </div>
                            )}
                     </div>

                </Stack>
               </Stack>
            </Stack>
            )
    }
}

export default Top;