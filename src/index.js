import * as React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#222222"
        }
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Home/>
    </ThemeProvider>,
    document.querySelector("#app")
);