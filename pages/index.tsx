import withLayoutMain from "../libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import Category from "../libs/components/Category";
import PopularProperties from "../libs/components/PopularProperties";
import Advertisement from "../libs/components/Advertisement";
import BestSellingProducts from "../libs/components/BestSellingProducts";
import TopAgents from "../libs/components/TopAgent";
import useDeviceDetect from "../libs/hooks/useDeviceDetect";
import { GET_PRODUCTS } from "../apollo/user/query";
import { useQuery } from "@apollo/client";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import CallToAction from "../libs/components/CallToAction";
import Boardhighlights from "../libs/components/BoardHighlights";
import Brands from "../libs/components/Brands";
const Home: NextPage = () => {
  //MOBILE Device or PC
  const device = useDeviceDetect()

  // const {
  //   loading: getPropertiesLoading,
  //   data: getPropertiesData,
  //   error: getPropertiesError,
  //   refetch: getPropertiesRefetch,
  // } = useQuery(GET_PRODUCTS, {
  //   fetchPolicy: "network-only",
  //   variables: {
  //     input: {
  //       page: 1,
  //       limit: 5,
  //       sort: "createdAt",
  //       direction: "DESC",
  //       search: {},
  //     },
  //   },
  // });
  // console.log("getProperties =>", getPropertiesData);
  

  if(device === "mobile") {
    return <Stack>HOME PAGE</Stack>
  } else {
    return (
      <Stack className={"home-page"}>
        <Category/>
        <PopularProperties/>
        <Advertisement/>
        <CallToAction/>
        <BestSellingProducts/>
        <Brands/>
        <TopAgents/>
        <Boardhighlights/>
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
