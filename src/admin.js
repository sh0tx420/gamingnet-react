import * as React from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";


export default function admin()
{
    return(
        <Card sx={{ width: 500, height: 300, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
            <Typography variant="h4" align="center" sx={{ background: "repeating-linear-gradient(to left, #CF0A0A 0%, #CF2D0C 100%)", fontFamily: "'Ubuntu', sans-serif" }}>
                Admin Panel
            </Typography>
            <CardContent>
                <TextField variant="outlined" label="Username" size="small" sx={{ display: "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}/>
            </CardContent>
        </Card>
    );
}