import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	Button,
	OutlinedInput,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	IconButton,
} from '@mui/material';
import { RefreshOutlined } from '@mui/icons-material';

const Filter = () => {
        const [searchText, setSearchText] = useState<string>("");
        const [showMore, setShowMore] = useState<boolean>(false);
        const [propertyPrice, setPropertyPrice] = useState({
          start: 0,
          end: 250000,
        });
        const propertySquare = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        const category = ["Sofa-Wardrobe", "Round Table", "Chair", "Dining Table", "Lighting Craft", "Drawers", "Wardrobe"]
      
    return (
        <Stack className="filter-main">
            <Stack className="find-your-home" mb="30px">
                <Typography className="title-main">Filter By Category</Typography>
                <Stack className="input-box">
                    <OutlinedInput
                    value={searchText}
                    type="text"
                    className="search-input"
                    placeholder="what are you looking?"
                    onChange={(e: any) => setSearchText(e.target.value)}
                    />
                    <img src="/img/icons/search_icon.png" alt=""/>
                    <Tooltip title="Reset">
                        <IconButton>
                            <RefreshOutlined/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
            <Stack className="find-your-home" mb="30px">
                <p className="title" style={{textShadow: "0px 3px 4px #b9b9b9"}}>
                    Category
                </p>
                <Stack className="property-location" style={{textShadow: "0px 3px 4px #b9b9b9"}}>
                {category.map((category: string) => {
                    return (
                        <Stack className={"input-box"} key={category}>
                            <Checkbox
                            id="location"
                            className="property-checkbox"
                            color="default"
                            size="small"
                            value={category}
                            checked={false}/>
                            <label htmlFor={category} style={{cursor: "pointer"}}>
                                <Typography className="property-type">{category}</Typography>
                            </label>
                        </Stack>
                    )
                })}
            </Stack>
            </Stack>
            <Stack className="find-your-home" mb="30px">
                <Typography className="title">Filter by Size</Typography>
                {["Large", "Medium", "Small"].map((size: string) => (
                 <Stack className="input-box" key={size}>
                    <Checkbox
                        id={size}
                        className="property-checkbox"
                        color="default"
                        size="small"
                        value={size}
                    />
                    <label style={{ cursor: "pointer" }}>
                        <Typography className="property-type">{size}</Typography>
                    </label>
                </Stack>
                ))}
            </Stack>
            <Stack className="find-your-home">
                <Typography className="title">Price Range</Typography>
                <Stack className="square-year-input">
                    <input
                    type="number"
                    placeholder="$ min"
                    min={0}
                    value={propertyPrice?.start ?? 0}
                    onChange={(e: any) => {
                        if (e.target.value >= 0) {
                        setPropertyPrice({ ...propertyPrice, start: e.target.value });
                        }
                    }}
                    />
                </Stack>
                <div className="central-divider"></div>
                <Stack className="square-year-input">
                    <input
                    type="number"
                    placeholder="$ max"
                    value={propertyPrice?.end ?? 0}
                    onChange={(e: any) => {
                        if (e.target.value >= 0) {
                        setPropertyPrice({ ...propertyPrice, end: e.target.value });
                        }
                    }}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Filter;
