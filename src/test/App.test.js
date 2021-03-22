import React from 'react';
import ReactDOM from 'react-dom';
import {act} from "@testing-library/react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {MuiThemeProvider} from "@material-ui/core";
import App from '../view/App';
import AppDrawer from "../component/AppDrawer";
import SnackBarComponent from "../component/SnackBarComponent";
import {Route} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

describe('Examining the rendering of the complete app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with correct theme mode', () => {
        //See https://stackoverflow.com/questions/57167525/how-to-set-media-queries-with-jest
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: light)',
                media: '',
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });
        let view = mount(<App/>);
        expect(view.find(MuiThemeProvider).props('theme').theme.palette.type).toEqual('light');
        view.unmount();

        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: dark)',
                media: '',
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });
        view = mount(<App/>);
        expect(view.find(MuiThemeProvider).props('theme').theme.palette.type).toEqual('dark');
        view.unmount();
    });

    it('allows to change theme mode based on user preference', () => {
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: light)',
                media: '',
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });
        const view = mount(<App/>);
        expect(view.find(MuiThemeProvider).props('theme').theme.palette.type).toEqual('light');
        act(() => {
            view.find(AppDrawer).prop('changeThemeMode')();
        });
        view.update();
        expect(view.find(MuiThemeProvider).props('theme').theme.palette.type).toEqual('dark');
        act(() => {
            view.find(AppDrawer).prop('changeThemeMode')();
        });
        view.update();
        expect(view.find(MuiThemeProvider).props('theme').theme.palette.type).toEqual('light');
        view.unmount();
    });

    it('can display global error', () => {
        const view = shallow(<App/>);
        const errorMessage = "Test error";
        expect(view.exists(SnackBarComponent)).toBe(false);
        act(() => {
            // First get a Route element, then the rendering function of a view, then the view, then the setState attached to call it
            view.find(Route).first().props()["render"]().props["errorHandler"](errorMessage);
        });
        view.update();
        expect(view.exists(SnackBarComponent)).toBe(true);
        expect(view.find(SnackBarComponent).props()['message']).toBe(errorMessage);
        view.unmount();
    });
});
