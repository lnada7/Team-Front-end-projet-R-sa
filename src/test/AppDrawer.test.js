import React from 'react';
import ReactDOM from 'react-dom';
import {act} from "@testing-library/react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {AppBar, Drawer, Hidden, ListItem, IconButton, Switch, Toolbar, Tooltip, ListItemText} from "@material-ui/core";

import AppDrawer from "../component/AppDrawer";
import {route} from "../route/Route";

import {local as localFr} from "../assets/lang/fr_fr";
import {local as localEn} from "../assets/lang/en_us";

Enzyme.configure({adapter: new Adapter()});

const fnChangeTheme = jest.fn();

describe('Examining the rendering of drawer component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with children', () => {
        const children = <em>Test</em>;
        const component = mount(
            <Router>
                <AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}>
                    {children}
                </AppDrawer>
            </Router>
        );
        expect(component.containsMatchingElement(children)).toBe(true);
        component.unmount();
    });

    it('renders with links', () => {
        const component = mount(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>);
        let nbLinks = 0;
        route.map((r) => {
            nbLinks += r.length;
        });
        expect(component.find(ListItem)).toHaveLength(nbLinks*2);
        expect(component.find(Link)).toHaveLength(nbLinks*2);

        component.unmount();
    });

    it('renders with correct theme mode switch', () => {
        const component = mount(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>);
        expect(component.find(Switch)).toHaveLength(2);
        //Open drawer
        act(() => {
            component.find(AppBar).find(IconButton).first().simulate("click");
        });
        component.update();
        expect(component.find(Switch)).toHaveLength(2);
        expect(component.find(Switch).first().prop("checked")).toEqual(true);

        //Close drawer - Uncomment only if Drawer type change
        /*act(() => {
            component.find("main").first().simulate("click");
        });
        component.update();
        expect(component.find(Switch)).toHaveLength(2);*/

        component.unmount();
    });

    it('toggle change theme mode when the theme switch is clicked', () => {
        const component = mount(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>);
        act(() => {
            component.find(AppBar).find(IconButton).first().simulate("click");
        });
        component.update();

        act(() => {
            component.find(Drawer).find(Switch).first().find("input").simulate("change");
        });
        component.update();
        expect(fnChangeTheme).toHaveBeenCalled();

        component.unmount();
    });

    it('toggle change language when the language switch is clicked', () => {
        const component = mount(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>);

        // English translation by default with jest
        expect(component.find(ListItemText).first().text()).toEqual(localEn.Route[route[0][0].path]);

        act(() => {
            component.find(AppBar).find(Tooltip).find(IconButton).first().simulate("click");
        });
        component.update();

        expect(component.find(ListItemText).first().text()).toEqual(localFr.Route[route[0][0].path]);

        act(() => {
            component.find(AppBar).find(Tooltip).find(IconButton).first().simulate("click");
        });
        component.update();

        expect(component.find(ListItemText).first().text()).toEqual(localEn.Route[route[0][0].path]);

        component.unmount();
    });

    it('can be opened and closed after for mobile screen', () => {
        //Set window size to display button
        window.innerWidth = 400;
        window.innerHeight = 400;
        window.dispatchEvent(new Event('resize'));

        const component = mount(<Router><AppDrawer changeThemeMode={fnChangeTheme} routes={route} darkMode={true}/></Router>);
        component.update();
        expect(component.find("nav").find(Hidden).find(Drawer).first().prop("open")).toEqual(false);

        act(() => {
            component.find(Toolbar).find(IconButton).first().simulate("click");
        });
        component.update();
        expect(component.find(Hidden).find(Drawer).first().prop("open")).toEqual(true);

        act(() => {
            component.find("nav").find(Hidden).find(Drawer).first().prop("onClose")();
        });
        component.update();
        expect(component.find("nav").find(Hidden).find(Drawer).first().prop("open")).toEqual(false);
        component.unmount();
    });
});
