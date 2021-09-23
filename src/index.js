import * as React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
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
            <Route exact path="/" component={Home}/>
        </ThemeProvider>
    </Router>,
    document.querySelector("#app")
);