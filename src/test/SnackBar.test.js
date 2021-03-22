import React from 'react';
import ReactDOM from 'react-dom';
import {act} from "@testing-library/react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Snackbar} from "@material-ui/core";

import SnackBarComponent from '../component/SnackBarComponent';

Enzyme.configure({adapter: new Adapter()});

const fnUndo = jest.fn();

describe('Examining the rendering of snack bar component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SnackBarComponent message={"Test"} type={"error"}/>, div);

        const component = shallow(<SnackBarComponent message={"Test"} type={"error"}/>);
        expect(component.find(Snackbar)).toHaveLength(1);
    });

    it('wait variant renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SnackBarComponent message={"Test"} type={"wait"}/>, div);

        const component = mount(<SnackBarComponent message={"Test"} type={"wait"}/>);
        expect(component.render().find("svg").find("circle")).toHaveLength(1);
        component.unmount();
    });

    it('undo success variant renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SnackBarComponent message={"Test"} onUndo={fnUndo} type={"successUndo"}/>, div);

        const component = mount(<SnackBarComponent message={"Test"} onUndo={fnUndo} type={"successUndo"}/>);
        expect(component.render().find("button").prop('aria-label')).toEqual("Undo");
        component.unmount();
    });

    it('can be closed with button click', () => {
        const component = shallow(<SnackBarComponent message={"Test"} type={"error"}/>);
        expect(component.find(Snackbar).prop("open")).toEqual(true);

        component.find(Snackbar).simulate("close",{},'');
        expect(component.find(Snackbar).prop("open")).toEqual(false);
    });

    it('cannot be closed without button click', () => {
        const component = shallow(<SnackBarComponent message={"Test"} type={"error"}/>);
        expect(component.find(Snackbar).prop("open")).toEqual(true);

        component.find(Snackbar).simulate("close",{},'clickaway');
        expect(component.find(Snackbar).prop("open")).toEqual(true);
    });

    it('can undo action with undo variant', () => {
        const component = mount(<SnackBarComponent message={"Test"} onUndo={fnUndo} type={"successUndo"}/>);
        component.find("button").first().simulate("click");

        expect(fnUndo).toBeCalledTimes(1);
        expect(component.find(Snackbar).prop("open")).toEqual(false);

        component.unmount();
    });

    it('can wait indefinitely', () => {
        const component = mount(<SnackBarComponent message={"Test"} type={"wait"}/>);
        const componentWithoutMessage = mount(<SnackBarComponent message={""} type={"wait"}/>);
        const componentError = mount(<SnackBarComponent message={"Test"} type={"error"}/>);

        act(() => {
            component.find("button").simulate('click');
            componentWithoutMessage.find("button").simulate('click');
            componentError.find("button").simulate('click');
        });

        component.update();
        componentWithoutMessage.update();
        componentError.update();

        expect(component.find(Snackbar).prop("open")).toEqual(true);
        expect(componentError.find(Snackbar).prop("open")).toEqual(false);
        expect(componentWithoutMessage.find(Snackbar).prop("open")).toEqual(false);
    });
});
