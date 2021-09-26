import * as React from "react";
import {
    Box, Typography, Divider,
    Grid, Card, CardContent, TextField,
    List, ListItem, ListItemButton, ListItemText, ListSubheader, ListItemIcon
} from "@mui/material";
import ReactHlsPlayer from "react-hls-player";
import { Announcement } from "@mui/icons-material";


export default function rtmp()
{
    return(
        <div>
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
                            <Box mt={0.7}/>
                            <List>
                                <ListSubheader>Channels</ListSubheader>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Announcement/>
                                        </ListItemIcon>
                                        <ListItemText primary="RT News"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Announcement/>
                                        </ListItemIcon>
                                        <ListItemText primary="Rossiya 24"/>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </CardContent>
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
