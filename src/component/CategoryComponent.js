import React from 'react';
import {Chip, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
    createStyles(theme => ({
        chip: {
            margin: theme.spacing(0.5),
        },
    })
    )
);

function CategoryComponent({category}) {
    const classes = useStyles();

    return (
        <Chip color="primary" label={category.detail} icon={category.getIcon()} className={classes.chip}/>
    );
}

export default CategoryComponent;
