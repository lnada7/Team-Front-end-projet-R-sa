import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CategoryType from "../component/CategoryType";
import getChipElement from "../utils/botinsaCategory";
import CategoryComponent from "../component/CategoryComponent";

Enzyme.configure({adapter: new Adapter()});

describe('Examining the return of User Role info', () => {

    it('return a Chip component when category is correct', () => {
        const component = mount(getChipElement(5));
        expect(component.containsMatchingElement(<CategoryComponent category={CategoryType.HUMANITARIAN}/>)).toBe(true);
        component.unmount();
    });

    it('return a null component when category is incorrect', () => {
        expect(getChipElement(0)).toBe(null);
        expect(getChipElement(11)).toBe(null);
        expect(getChipElement(100)).toBe(null);
        expect(getChipElement(null)).toBe(null);
        expect(getChipElement(undefined)).toBe(null);
    });
});