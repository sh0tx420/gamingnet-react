import * as React from "react";
import {
    Box, AppBar, Toolbar, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListItem,
    Drawer, Divider, Grid, Card, CardContent, CardActions, Collapse, TextField
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactHlsPlayer from "react-hls-player";
import { styled } from "@mui/material/styles";
import { Announcement } from "@mui/icons-material";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    expand;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function rtmp()
{
    const [state, setState] = React.useState({});
    const [expanded, setExpanded] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) { 
            return;
        }  // fixes the react re-render bug thing

        setState({ ...state, [anchor]: open });
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const list = (anchor) => (
        <div onClick={toggleDrawer(anchor, false)}>
            <img src="/assets/sus.jpg" width="100%" height={96}/>
            <Divider/>
            <List sx={{ width: 225 }}>
                <ListItemButton component="a" href="/">
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <ListItemButton component="a" href="/rtmp">
                    <ListItemIcon>
                        <OndemandVideoIcon/>
                    </ListItemIcon>
                    <ListItemText>RTMP Stream</ListItemText>
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

            <Box mt={3}/>

            <Grid container spacing={1} alignItems="center" justify="center" columns={2}>
                <Grid item sx={{ width: "350px", marginLeft: "14px" }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4" align="center">Configuration</Typography>
                            <Divider/>
                            <Box mt={1.2}/>
                            <Typography>Insert an URL to a RTMP stream or pick one of our preset channels.</Typography>
                            <Box mt={0.7}/>
                            <TextField label="RTMP Link" variant="standard" sx={{ width: "100%" }}/>
                        </CardContent>
                        <CardActions disableSpacing>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Announcement/>
                                    </ListItemIcon>
                                    <Typography>News</Typography>
                                    <ExpandMore expand={expanded} onClick={handleExpandClick}>
                                        <ExpandMoreIcon/>
                                    </ExpandMore>
                                </ListItem>
                            </List>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnEXit>
                            <CardContent>
                                <List>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon/>
                                        </ListItemIcon>
                                        <ListItemText>sex</ListItemText>
                                    </ListItemButton>
                                </List>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                <Grid item sx={{ width: "80%" }}>
                    <Card>
                        <CardContent>
                            <ReactHlsPlayer
                                src="https://rt-glb.gcdn.co/live/rtnews/playlist.m3u8"
                                autoPlay={false}
                                controls={true}
                                width="100%"
                                height="auto"
                                hlsConfig={{
                                    maxLoadingDelay: 4,
                                    minAutoBitrate: 0,
                                    lowLatencyMode: true,
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={3}/>
        </div>
    );
}