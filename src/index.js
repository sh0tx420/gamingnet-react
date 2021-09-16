import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Home from "./Home";
import theme from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

const CssOverride = withStyles({
    "@global": {
        ".MuiDrawer-paper": {
            width: "250px"
        }
    }
})(() => null);


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssOverride/>
            <CssBaseline/>
            <Route exact path="/" component={Home}/>
        </ThemeProvider>
    </Router>,
    document.querySelector("#root"),
);
