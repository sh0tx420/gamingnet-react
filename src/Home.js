import * as React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Drawer, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";


export default function Home()
{
    const [state, setState] = React.useState({});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) { 
            return;
        }  // fixes the react re-render bug thing

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div onClick={toggleDrawer(anchor, false)}>
            <img src="/assets/sus.jpg" width="100%" height={96}/>
            <Divider/>
            <List sx={{ width: 225 }}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
            </List>
        </div>
    );

    return(
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Box sx={{ mt: "12px", mx: "auto", width: "98%" }}>
                        <AppBar position="sticky" sx={{ borderRadius: 2 }}>
                            <Toolbar>
                                <IconButton size="large" edge="start" onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h4" sx={{ fontFamily: "Ubuntu", fontWeight: "600", marginLeft: "4px" }}>gamingnet</Typography>
                            </Toolbar>
                        </AppBar>

                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </Box>
                </React.Fragment>
            ))}
        </div>
    );
}