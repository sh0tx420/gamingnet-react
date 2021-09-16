import * as React from "react";
import { Drawer, Typography, List, ListItem, ListItemText, ListItemIcon, Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";


export default function App()
{
    const [state, setState] = React.useState({});

    const Drawer_Toggle = (anchor, open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            onClick={Drawer_Toggle(anchor, false)}
            onKeyDown={Drawer_Toggle(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return(
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <AppBar position="static" color="#2d2d2d">
                        <Toolbar>
                            <IconButton aria-label="Menu" onClick={Drawer_Toggle(anchor, true)}>
                                <Menu/>
                            </IconButton>
                            <Box ml={3.7}/>
                            <Typography variant="h4">gamingnet</Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer style={{ width: "1px" }} anchor={anchor} open={state[anchor]} onClose={Drawer_Toggle(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

            <Typography variant="h3">website under construction sry {">"}:(</Typography>
        </div>
    );
}
