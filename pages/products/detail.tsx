import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";

const PropertyDetail = () => {
    const device = useDeviceDetect()

   if(device === "mobile") {
      return <Stack>PROPERTYLIST PAGE</Stack>
   } else { 
    return <>
           <Container sx={{background: green}}>Property Detail</Container>
        </>
   }
}

export default withLayoutBasic(PropertyDetail);