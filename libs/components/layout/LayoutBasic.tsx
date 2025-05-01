import useDeviceDetect from "../../../libs/hooks/useDeviceDetect"
import { Stack } from "@mui/system"
import Head from "next/head"
import Footer from "./Footer"
import Top from "./Top"


const withLayoutBasic = (Component: any) => {
    return (props: any) => {
        const device = useDeviceDetect()
        if(device === "mobile") {
            return <>
            <Head><title>Nestar</title></Head>
           <Stack id="mobile-wrap">
           <Stack id={"top"}>
               <Top/>
           </Stack>
               <Stack id="main">
                   <Component {...props}/>
               </Stack>

           <Stack id={"footer"}>
               <Footer/>
           </Stack>
           </Stack>
            </>
        } else {
            return (
                <>
                <Head>
                    <title>Nestwood</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack id={"top"}>
                        <Top/>
                    </Stack>
                    <Stack id={"header-basic"}>
                        
                    </Stack>
                 <Stack id="main">
                     <Component {...props}/>
                 </Stack>
         
                 <Stack id={"footer"}>
                    <Footer/>
                 </Stack>
                </Stack>
                </>
            )
        }
      
    }
}

export default withLayoutBasic;