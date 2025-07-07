import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	OutlinedInput,  
	Tooltip,
	IconButton,
} from '@mui/material';
import { RefreshOutlined } from '@mui/icons-material';
import { ProductsInquiry } from 'libs/types/property/property.input';
import { ProductSize, ProductType } from 'libs/enums/product.enum';
import { useRouter } from 'next/router';


interface FilterProps {
    searchFilter: ProductsInquiry;
    setSearchFilter: any;
    initialInput: ProductsInquiry;
}

const Filter = (props: FilterProps) => {
    const {searchFilter, setSearchFilter, initialInput} = props;
        const [searchText, setSearchText] = useState<string>("");
        const router = useRouter()
        const [showMore, setShowMore] = useState<boolean>(false);
        const [category, setCategory] = useState<ProductType[]>(Object.values(ProductType))
        const [size, setSize] = useState<ProductSize[]>(Object.values(ProductSize))

        //LIFECYCLES

        useEffect(() => {
            if(searchFilter?.search?.productType?.length == 0) {
                delete searchFilter.search.productType;
                setShowMore(false)
                router.push(`/products?input=${JSON.stringify({
                    ...searchFilter,
                    search: {
                        ...searchFilter.search,
                    },
                })}`, `/products?input=${JSON.stringify({
                    ...searchFilter,
                    search: {
                        ...searchFilter.search,
                    },
                })}`, { scroll: false }).then();
            }

            if(searchFilter?.search?.sizeList?.length == 0) {
                delete searchFilter.search.sizeList;
                router.push(`/products?input=${JSON.stringify({
                    ...searchFilter,
                    search: {
                        ...searchFilter.search,
                    },
                })}`, `/products?input=${JSON.stringify({
                    ...searchFilter,
                    search: {
                        ...searchFilter.search
                    },

                })}`, {scroll: false}).then()
            }
        }, [searchFilter])

      
        //Handlers


        const productTypeSelectHandler = useCallback(
            async (e: any) => {
                try {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    if(isChecked) {
                        await router.push(
                            `/products?input=${JSON.stringify({
                                ...searchFilter,
                                search: { ...searchFilter.search, productType: [...(searchFilter?.search?.productType || []), value] },
                            })}`,
                            `/products?input=${JSON.stringify({
                                ...searchFilter,
                                search: { ...searchFilter.search, productType: [...(searchFilter?.search?.productType || []), value] },
                            })}`,
                            { scroll: false },
                        );
                    } else if (searchFilter?.search?.productType?.includes(value)) {
                        await router.push(
                            `/products?input=${JSON.stringify({
                                ...searchFilter,
                                search: {
                                    ...searchFilter.search,
                                    productType: searchFilter?.search?.productType?.filter((item: string) => item !== value),
                                },
                            })}`,
                            `/products?input=${JSON.stringify({
                                ...searchFilter,
                                search: {
                                    ...searchFilter.search,
                                    productType: searchFilter?.search?.productType?.filter((item: string) => item !== value),
                                },
                            })}`,
                            { scroll: false },
                        );
                    }
                } catch(err) {
                    console.log("Error on ProductTypeHanler ", err);
                }
            },
       [searchFilter])


       const productSizeHandler = useCallback(
        async (e: any) => {
            try {
                const isChecked = e.target.checked;
                const value = e.target.value;
                if(isChecked) {
                    await router.push(
                        `/products?input=${JSON.stringify({
                            ...searchFilter,
                            search: { ...searchFilter.search, sizeList: [...(searchFilter?.search?.sizeList || []), value] },
                        })}`,
                        `/products?input=${JSON.stringify({
                            ...searchFilter,
                            search: { ...searchFilter.search, sizeList: [...(searchFilter?.search?.sizeList || []), value] },
                        })}`,
                        { scroll: false },
                    );
                } else if (searchFilter?.search?.sizeList?.includes(value)) {
                    await router.push(
                        `/products?input=${JSON.stringify({
                            ...searchFilter,
                            search: {
                                ...searchFilter.search,
                                sizeList: searchFilter?.search?.sizeList?.filter((item: string) => item !== value),
                            },
                        })}`,
                        `/products?input=${JSON.stringify({
                            ...searchFilter,
                            search: {
                                ...searchFilter.search,
                                sizeList: searchFilter?.search?.sizeList?.filter((item: string) => item !== value),
                            },
                        })}`,
                        { scroll: false },
                    );
                }
            } catch(err) {
                console.log("Error on ProductSizeHanler ", err);
            }
        },
   [searchFilter])

       

       const productPriceRangeHandler = useCallback(
       async (value: number, type: string ) => {
        try {
            if(type == "start") {
                await router.push(
					`/products?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					`/products?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
            } else {
                await router.push(
					`/products?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					`/products?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
            }

        } catch(err) {
            console.log("error on PriceRange =>", err);
        }
       },
        [searchFilter])


        const refreshHandler = async () => {
            try {
                setSearchText('');
                await router.push(
                    `/products?input=${JSON.stringify(initialInput)}`,
                    `/products?input=${JSON.stringify(initialInput)}`,
                    { scroll: false },
                );
            } catch (err: any) {
                console.log('ERROR, refreshHandler:', err);
            }
        };
    return (
        <Stack className="filter-main" marginBottom={50}>
            <Stack className="find-your-home" mb="70px">
                <Typography className="title-main">Filter By Category</Typography>
                <Stack className="input-box">
                    <OutlinedInput
                    value={searchText}
                    type="text"
                    className="search-input"
                    placeholder="what are you looking?"
                    onChange={(e: any) => setSearchText(e.target.value)}
                    onKeyDown={(event: any) => {
                        if (event.key == 'Enter') {
                            setSearchFilter({
                                ...searchFilter,
                                search: { ...searchFilter.search, text: searchText },
                            });
                        }
                    }}
                    />
                    <img src="/img/icons/search_icon.png" alt=""/>
                    <Tooltip title="Reset">
                        <IconButton  onClick={refreshHandler}>
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
                            id={category}
                            className="property-checkbox"
                            color="default"
                            size="small"
                            value={category}
                            checked={(searchFilter?.search?.productType || []).includes(category as ProductType)}
							onChange={productTypeSelectHandler}/>
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
                {size.map((size: string) => (
                 <Stack className="input-box" key={size}>
                    <Checkbox
                        id={size}
                        className="property-checkbox"
                        color="default"
                        size="small"
                        value={size}
                        checked={(searchFilter?.search?.sizeList || []).includes(size as ProductSize)}
                        onChange={productSizeHandler}
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
                    value={searchFilter?.search?.pricesRange?.start ?? 0}
					onChange={(e: any) => {
								if (e.target.value >= 0) {
									productPriceRangeHandler(e.target.value, 'start');
								}
					    }}
                    />
                </Stack>
                <div className="central-divider"></div>
                <Stack className="square-year-input">
                    <input
                    type="number"
                    placeholder="$ max"
                    value={searchFilter?.search?.pricesRange?.end ?? 0}
                    onChange={(e: any) => {
                        if (e.target.value >= 0) {
                            productPriceRangeHandler(e.target.value, 'end');
                        }
                    }}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}


export default Filter;
