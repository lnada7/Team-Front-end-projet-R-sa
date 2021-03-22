import CategoryComponent from "../component/CategoryComponent";
import CategoryType from "../component/CategoryType";
import React from "react";

export const getAllCategoryDetail = () => {
    return [
        CategoryType.ANIMATION.detail,
        CategoryType.ART.detail,
        CategoryType.INTERNATIONAL.detail,
        CategoryType.DEPARTMENT.detail,
        CategoryType.HUMANITARIAN.detail,
        CategoryType.ENTERTAINMENT.detail,
        CategoryType.SPORT.detail,
        CategoryType.SCIENCE.detail
    ];
};

export default function getChipElement(id){
    let category = {};
    switch (id) {
    case 1:
        category = CategoryType.ANIMATION;
        break;
    case 2:
        category = CategoryType.ART;
        break;
    case 3:
        category = CategoryType.INTERNATIONAL;
        break;
    case 4:
        category = CategoryType.DEPARTMENT;
        break;
    case 5:
        category = CategoryType.HUMANITARIAN;
        break;
    case 6:
        category = CategoryType.ENTERTAINMENT;
        break;
    case 7:
        category = CategoryType.SPORT;
        break;
    case 8:
        category = CategoryType.SCIENCE;
        break;
    default:
    }
    if(Object.getOwnPropertyNames(category).length === 0){
        return null;
    }
    return <CategoryComponent category={category}/> ;
}