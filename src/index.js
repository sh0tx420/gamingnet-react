import * as React from "react";
import ReactDOM from "react-dom";
import Base from "./base";
import Home from "./Home";
import rtmp from "./rtmp";
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
});

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Base/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rtmp" component={rtmp}/>
        </ThemeProvider>
    </Router>,
    document.querySelector("#app")
);