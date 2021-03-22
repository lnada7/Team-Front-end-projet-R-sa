import React from "react";
import BrushIcon from '@material-ui/icons/Brush';
import BuildIcon from '@material-ui/icons/Build';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LanguageIcon from '@material-ui/icons/Language';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SchoolIcon from '@material-ui/icons/School';
import WeekendIcon from '@material-ui/icons/Weekend';

export default {
    ANIMATION: {detail: "Animation du campus", getIcon: () => <MusicNoteIcon />},
    ART: {detail: "Arts et spectacles", getIcon: () => <BrushIcon />},
    DEPARTMENT: {detail: "Association de département", getIcon: () => <SchoolIcon />},
    INTERNATIONAL: {detail: "Cultures internationales", getIcon: () => <LanguageIcon />},
    HUMANITARIAN: {detail: "Humanitaire et social", getIcon: () => <EmojiPeopleIcon />},
    ENTERTAINMENT: {detail: "Loisir", getIcon: () => <WeekendIcon />},
    SPORT: {detail: "Sport", getIcon: () => <DirectionsRunIcon />},
    SCIENCE: {detail: "Technique et scientifique", getIcon: () => <BuildIcon />},
};