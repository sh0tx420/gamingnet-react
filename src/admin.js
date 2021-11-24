import * as React from "react";
import { Card, CardContent, Typography, IconButton, InputAdornment, FormControl, OutlinedInput, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function admin() {
    const [values, setValues] = React.useState({ showPassword: false });

    const PasswordVisibilityHandleur = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const LoginRequestManager = () => {
        // send http request to api server to validate login info
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", response => {
            console.log(response); // parse api response here, console.log to not error
        });

        xhr.open("POST", "localhost:64978");
        xhr.send(JSON.stringify({ username: "username", passwd: "password" })); // put reactjs values from login form inside json request
    };

    return (
        <Card sx={{ width: 500, height: 300, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    background: "repeating-linear-gradient(to left, #CF0A0A 0%, #CF2D0C 100%)",
                    fontFamily: "'Ubuntu', sans-serif"
                }}>
                Admin Panel
            </Typography>
            <CardContent>
                <Typography sx={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 15 }}>USERNAME</Typography>
                <FormControl variant="outlined" size="small" fullWidth sx={{ marginTop: "2px", marginBottom: 3 }}>
                    <OutlinedInput>
                    </OutlinedInput>
                </FormControl>
                <Typography sx={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 15 }}>PASSWORD</Typography>
                <FormControl variant="outlined" size="small" fullWidth sx={{ marginTop: "2px" }}>
                    <OutlinedInput type={ values.showPassword ? "text": "password" } endAdornment={
                        <InputAdornment>
                            <IconButton onClick={PasswordVisibilityHandleur} edge="end">
                                {values.showPassword ? <Visibility/> : <VisibilityOff/> }
                            </IconButton>
                        </InputAdornment>
                    }>
                    </OutlinedInput>
                </FormControl>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
                    <Button variant="contained" sx={{ width: "20%" }} onClick={LoginRequestManager()}>LOGIN</Button>
                </div>
            </CardContent>
        </Card>
    );
}