import * as React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function Home()
{
    return(
        <Box sx={{ mt: "12px", mx: "auto", width: "98%" }}>
            <AppBar position="sticky" sx={{ borderRadius: 2 }}>
                <Toolbar>
                    <Typography variant="h2">test</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}