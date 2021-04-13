import React from "react";
import {Home as HomeIcon, PowerSettingsNew as PowerSettingsNewIcon} from '@material-ui/icons';
import BallotIcon from '@material-ui/icons/Ballot';

import Reservation from "../view/Reservation";

export const route = [[
    {
        render: Reservation,
        path: "/Reservation",
        icon: <BallotIcon/>
    },
]];