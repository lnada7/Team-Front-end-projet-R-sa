import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, red} from "@material-ui/core/colors";

export const getTheme = (prefersDarkMode) => {
    return createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: blue,
            secondary: red
        }
    });
};
