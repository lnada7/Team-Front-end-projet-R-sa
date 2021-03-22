import React from "react";
import {Home as HomeIcon, PowerSettingsNew as PowerSettingsNewIcon} from '@material-ui/icons';
import BallotIcon from '@material-ui/icons/Ballot';

import LoginPage from "../view/LoginPage";
import HomePage from "../view/HomePage";
import Resa from "../view/resa";

export const route = [[
    {
        render: HomePage,
        path: "/",
        icon: <HomeIcon/>
    },
],[
    {
        render: LoginPage,
        path: "/login",
        icon: <PowerSettingsNewIcon/>
    },

],[
    {
        render: Resa,
        path: "/resa",
        icon: <BallotIcon/>
    },
]];