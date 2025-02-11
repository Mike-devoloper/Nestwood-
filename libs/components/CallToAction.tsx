import { Box, Button, Stack } from "@mui/material";


const CallToAction = () => {
    return (
        <Stack className="cta-container">
            <Stack className="img-box">
                <Box className={"desc-box"}>
                  <p>A Touch Of Coverage</p>
                  <h1>Living Room With Our Range of Sofas</h1>
                  <Button><a href="/products">Shop now</a></Button>
                </Box>
                <img src="/img/property/furni2.jpg" alt="banner"/>
            </Stack>
            <Stack className="img-box">
                <Box className={"desc-box"}>
                  <p>A Touch Of Coverage</p>
                  <h1>Living Room With Our Range of Sofas</h1>
                  <Button><a href="/products">Shop now</a></Button>
                </Box>
                <img src="/img/property/furni3.jpg" alt="banner"/>
            </Stack>
        </Stack>
    )
}

export default CallToAction;