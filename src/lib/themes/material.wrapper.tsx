import React, { FC } from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { darkTheme } from "./theme";
import {ThemeProvider} from "styled-components";

const MaterialWrapper: FC = (props) => (
    <MaterialThemeProvider theme={darkTheme}><ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider></MaterialThemeProvider>
);

export default MaterialWrapper