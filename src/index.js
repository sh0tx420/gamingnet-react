import * as React from "react";
import ReactDOM from "react-dom";
import Base from "./base";
import home from "./home";
import rtmp from "./rtmp";
import admin from "./admin";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";


const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#222222"
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Base/>
            <Route exact path="/" component={home}/>
            <Route exact path="/rtmp" component={rtmp}/>
            <Route exact path="/admin" component={admin}/>
        </ThemeProvider>
    </Router>,
    document.querySelector("#app")
);