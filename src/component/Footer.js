import React, {useContext} from "react";
import {Box, Link, Typography} from "@material-ui/core";
import LanguageContext from "../LanguageContext";

function Copyright() {
    const local = useContext(LanguageContext);
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright © <Link color="inherit" href="https://faq-equipes.bde-insa-lyon.fr/sia">SIA INSA Lyon</Link>
            {' ' + new Date().getFullYear()} - <Link color="inherit" href="https://gitlab.com/sia-insa-lyon/dev/portailva-2/portailva-website">{local.Component.Footer.seeSection} GitLab</Link>
        </Typography>
    );
}

function Footer() {
    return (<footer><Box mt={8}><Copyright/><br/></Box></footer>);
}

export default Footer;
