import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";


export default function Home()
{
    return(
        <Card sx={{ width: 700, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
            <CardContent>
                <Typography variant="h4" align="center">
                    can someone else do this shit for me please
                </Typography>
            </CardContent>
        </Card>
    );
}