import useDeviceDetect from "../../../libs/hooks/useDeviceDetect";
import {
  Badge,
  Box,
  FormControl,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import CategoryModal from "../common/CategoryModal";
import Drawer from "../property/Drawer";
import React from "react";
import { getJwtToken, logOut, updateUserInfo } from "libs/auth";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "apollo/store";
import { REACT_APP_API_URL } from "libs/config";
import { Logout } from "@mui/icons-material";

const Top = () => {
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const user = useReactiveVar(userVar);
  const device = useDeviceDetect();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutAnchor, setLogoutAnchor] = React.useState<null | HTMLElement>(
    null
  );
  const logoutOpen = Boolean(logoutAnchor);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  const languages = [
    { code: "en", label: "English", flag: "/img/flag/langen.png" },
    { code: "kr", label: "Korean", flag: "/img/flag/langkr.png" },
    { code: "ru", label: "Russian", flag: "/img/flag/langru.png" },
  ];

  useEffect(() => {
    const jwt = getJwtToken();
    if (jwt) updateUserInfo(jwt);
  }, []);

  //HANDLERS
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
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
    );
  } else {
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
              <input
                type="text"
                name="search"
                id="search-filter"
                placeholder="Search products..."
              />
              <button className="search-btn">Search</button>
            </Box>
            <Box
              className={"basket-box"}
              onClick={toggleDrawer(true)}
              sx={{ cursor: "pointer" }}
            >
              <Badge color="secondary" badgeContent={1}>
                <img src="/img/icons/basket.svg" alt="basket" />
              </Badge>
            </Box>
            <Box className={"user-box"}>
              {user?._id ? (
                <>
                  <div
                    className={"login-user"}
                    onClick={(event: any) =>
                      setLogoutAnchor(event.currentTarget)
                    }
                  >
                    <img
                      src={
                        user?.memberImage
                          ? `${REACT_APP_API_URL}/${user?.memberImage}`
                          : "/img/profile/agent.png"
                      }
                      alt=""
                    />
                  </div>

                  <Menu
                    id="basic-menu"
                    anchorEl={logoutAnchor}
                    open={logoutOpen}
                    onClose={() => setLogoutAnchor(null)}
                    sx={{ mt: "5px" }}
                  >
                    <MenuItem onClick={logOut}>
                      <Logout
                        fontSize="small"
                        style={{ color: "blue", marginRight: "10px" }}
                      />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Link href={"/account/register"}>
                  <div className={"join-box"}>
                    <AccountCircleOutlinedIcon />
                    <span>Login / Register</span>
                  </div>
                </Link>
              )}
            </Box>
          </Stack>
          <Stack className={"navbar-bottom"}>
            <Box component={"div"} className={"selector"}>
              <CategoryModal
                modalOpen={modalOpen}
                modalClose={modalClose}
                open={open}
              />
            </Box>
            <Box component={"div"} className={"router-box"}>
              <Link href={"/"}>
                <div>{"Home"}</div>
              </Link>
              <Link href={"/products"}>
                <div>{"Products"}</div>
              </Link>
              <Link href={"/agent"}>
                <div> {"Agents"} </div>
              </Link>
              <Link href={"/blog?articleCategory=FREE"}>
                <div> {"Blogs"} </div>
              </Link>
                {user?._id && (
                     <Link href={"/mypage"}>
                     <div> {"My Page"} </div>
                   </Link>
                )}

              <Link href={"/cs"}>
                <div> {"CS"} </div>
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
                  style={{
                    width: "24px",
                    height: "17px",
                    borderRadius: "2px",
                    marginRight: "8px",
                  }}
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
                        style={{
                          width: "20px",
                          height: "14px",
                          marginRight: "8px",
                        }}
                      />
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Stack>
          <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </Stack>
      </Stack>
    );
  }
};

export default Top;
