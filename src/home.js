import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";


export default function home() {
    return(
        <Card sx={{ width: 700, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
            <Typography variant="h4" align="center" sx={{ background: "repeating-linear-gradient(to left, #121FCF 0%, #08CFCF 100%)", fontFamily: "'Ubuntu', sans-serif" }}>
                About
            </Typography>
            <CardContent>
                <Typography variant="h4" align="center">
                    IP: gamingnet.cf
                    <br/>
                    we do gaming
                    <br/>
                    <img width="100%" src="https://wayde.tixte.com/r/joinus.jpg"/>
                </Typography>
            </CardContent>
        </Card>
    );
}
