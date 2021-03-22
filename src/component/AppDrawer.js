import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, CssBaseline, Divider, Drawer, IconButton, Grid, Hidden,
    List, ListItem, ListItemIcon, ListItemText, Switch, Toolbar, Tooltip, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/NightsStay';
import TranslateIcon from '@material-ui/icons/Translate';

import {local as localFr} from "../assets/lang/fr_fr";
import {local as localEn} from "../assets/lang/en_us";
import {LanguageProvider} from "../LanguageContext";

import Logo_VA from "../assets/image/va_color.png";

AppDrawer.propTypes = {
    routes: PropTypes.array.isRequired,
    darkMode: PropTypes.bool.isRequired,
    changeThemeMode: PropTypes.func.isRequired,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    //positioner mes carrés
    root: {
        display: 'flex',
    },
    appBar: { //Bar en haut en bleu
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    // necessary for content to be below app bar
    //mon cube toolbar à gauche 
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    //"Portail VA 2 "
    title: {
        flexGrow: 1,
        textAlign: "left"
    },
    logo: {
        marginRight: theme.spacing(2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function AppDrawer({darkMode, changeThemeMode, routes, ...props}) {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [language, setLanguage] = React.useState((navigator.language  === "fr" || navigator.userLanguage === "fr") ? localFr : localEn);

    const handleModeChange = () => {
        changeThemeMode();
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleChangeLanguage = () => {
        if (language === localFr){
            setLanguage(localEn);
        }else{
            setLanguage(localFr);
        }
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <img src={Logo_VA} alt="Logo VA" width="60" height="60"/>
            </div>
            <Divider />
            <List>
                {routes.map((route, indexRoute) => {
                    return (
                        <React.Fragment key={'DrawerList_' + indexRoute}>
                            {route.map((element, index) => {
                                return (<ListItem button key={element.name + '_' + index} component={Link} to={element.path}>
                                    <ListItemIcon>{element.icon}</ListItemIcon>
                                    <ListItemText primary={language.Route[element.path]}/>
                                </ListItem>);
                            })}
                            {(indexRoute < (routes.length - 1)) ? <Divider/> : null}
                        </React.Fragment>
                    );
                })}
            </List>
            <Typography component="div" className={classes.toolbar}>
                <Grid component="label" container alignItems="center" justify="center">
                    <Grid item><SunIcon/></Grid>
                    <Grid item>
                        <Switch
                            color="primary"
                            name="changeTheme"
                            label="Dark mode"
                            inputProps={{'aria-label': 'Dark mode checkbox'}}
                            checked={darkMode}
                            onChange={handleModeChange}
                        />
                    </Grid>
                    <Grid item><MoonIcon/></Grid>
                </Grid>
            </Typography>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                <Toolbar>
                    <IconButton
                        color="inherit" aria-label="open drawer"
                        onClick={handleDrawerOpen} edge="start"
                        className={clsx(classes.menuButton, {[classes.hide]: open,})}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Hidden mdUp implementation="css">
                        <img src={Logo_VA} alt="Logo VA" width="40" height="40" className={classes.logo}/>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        Portail VA 2
                    </Typography>
                    <Tooltip title={language.Component.AppDrawer.translateButton}>
                        <IconButton aria-label={language.Component.AppDrawer.translateButton} color="inherit" onClick={toggleChangeLanguage.bind(this)}>
                            <TranslateIcon/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={open}
                        onClose={handleDrawerClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer classes={{paper: classes.drawerPaper}} variant="permanent" open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <LanguageProvider value={language}>
                    {props.children}
                </LanguageProvider>
            </main>
        </div>
    );
}
