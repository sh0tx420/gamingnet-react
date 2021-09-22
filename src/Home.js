import * as React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function Home()
{
    return(
        <Box sx={{ mt: "12px", mx: "auto", width: "98%" }}>
            <AppBar position="sticky" sx={{ borderRadius: 2 }}>
                <Toolbar>
                    <IconButton size="large" edge="start">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4" sx={{ fontFamily: "Ubuntu", fontWeight: "600", marginLeft: "4px" }}>gamingnet</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}