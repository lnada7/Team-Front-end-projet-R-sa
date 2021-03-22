import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import {CssBaseline, useMediaQuery} from "@material-ui/core";

import AppDrawer from "../component/AppDrawer";
import Footer from "../component/Footer";
import SnackBarComponent from "../component/SnackBarComponent";
import {route as routeList} from "../route/Route";
import {getTheme} from "../Theme";

function App() {
    const userWantsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [errorMessage, setError] = useState("");
    const [theme, setTheme] = useState(getTheme(userWantsDarkMode));

    const generatedRoute = routeList.map((list,listIndex) => {
        return (list.map((element, index) => {
            return <Route exact key={"route_" + listIndex + "_" + index}
                path={element.path}
                render={(props) => <element.render {...props} errorHandler={setError} />} />;
        }));
    });

    const toggleThemeModeChange = () => {
        setTheme(getTheme(theme.palette.type === "light"));
    };

    useEffect(() => setTheme(getTheme(userWantsDarkMode)), [userWantsDarkMode]);

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router basename={process.env.PUBLIC_URL}>
                    <AppDrawer routes={routeList} darkMode={theme.palette.type === "dark"} changeThemeMode={toggleThemeModeChange}>
                        <Switch>
                            {generatedRoute}
                        </Switch>
                        <Footer/>
                    </AppDrawer>
                </Router>
                {(errorMessage !== "") ? <SnackBarComponent type={"error"} message={errorMessage}/> : null}
            </MuiThemeProvider>
        </div>
    );
}

export default App;
