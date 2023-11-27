import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeaographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Geaography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geaography chart" suntitle="Simple Geaography Chart"/>
            <Box height="75vh" border={`1px solid ${colors.gray[100]}`}>
                <GeaographyChart/>
            </Box>

        </Box>
    )
}

export default Geaography;