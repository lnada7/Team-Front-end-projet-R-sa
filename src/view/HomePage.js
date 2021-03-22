import React from 'react';
import {Link} from "react-router-dom";
import {Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: theme.palette.background.paper,
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            minHeight: "5vh",
            verticalAlign: "center",
            margin: "auto",
            backgroundColor: theme.palette.background.paper
        },
        paperBackground: {
            backgroundColor: theme.palette.background.paper
        },
        listTitle: {
            margin: theme.spacing(4, 0, 2),
        },
    })
);

const COMMUNICATION_LINK = [
    {
        name: "Affichage",
        detail: "Afficher ton événement sur les écrans (RI, BMC, BDE)",
        link: "https://affichage.bde-insa-lyon.fr/",
        icon: () => <DisplayIcon/>
    },
    {
        name: "Facebook",
        detail: "Voir le groupe Facebook inter-assos",
        link: "https://www.facebook.com/groups/541903256344310/",
        icon: () => <FacebookIcon/>
    }
];

const APPLICATIONTION_LINK = [
    {
        name: "Résa",
        detail: "Voir les salles ou le matos que tu peux réserver (réservation à faire au BDE)",
        link: "https://resa.bde-insa-lyon.fr/book/home",
        icon: () => <PlaceIcon/>
    },
    {
        name: "Wiki VA",
        detail: "Voir le wiki pour les associations",
        link: "https://wiki.asso-insa-lyon.fr/index.php/Accueil",
        icon: () => <WikiIcon/>
    },
    {
        name: "Autres",
        detail: "Pleiiiiiin de documents intéressants",
        link: "https://drive.google.com/open?id=14cAxIfOKH4uRPdzsi8ZpVuzSUnmL-utC",
        icon: () => <DocumentIcon/>
    }
];

function HomePage(){
    const classes = useStyles();

    return(
        <Container fixed>
            <Typography component={"h1"} variant="h4" gutterBottom>Bienvenue sur Portail VA V2 - revamped !</Typography>
            <br/>
            <Typography component={"p"} variant={"body1"}>Ici tu trouveras le <Link to={"/botinsa"}>Bot'INSA</Link>, grand annuaire des associations INSAliennes. Tu pourras y dénicher des informations sur toutes les associations, comment les contacter, leurs permanences et leurs événements.</Typography>
            <br/>
            <Typography component={"p"} variant={"body1"}>Si tu te connectes en tant qu’association, tu auras également accès à ton espace personnel mais aussi à beaucoup de ressources qui te seront utiles.</Typography>
            <br/>
            <Typography component={"p"} variant={"body1"} style={{textAlign: "center"}}>Va vite explorer tout ça et si tu rencontres un problème, tu peux nous contacter sur <Typography component={"span"} variant={"body1"} style={{display: "none"}}>bde</Typography>cva@<Typography component={"span"} variant={"body1"} style={{display: "none"}}>bde</Typography>led.insa-lyon.fr, à très vite. </Typography>
            <br/>
            <footer style={{textAlign: "center"}}>
                <Typography component={"cite"} variant={"body1"}>- l’équipe CVA.</Typography>
            </footer>
            <br/><Divider /><br/>

            <Typography component={"h6"} variant="h6" gutterBottom>Ressources utiles pour les assos !</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" className={classes.listTitle}>
                        Communication
                    </Typography>
                    <div className={classes.paperBackground}>
                        <List>
                            {COMMUNICATION_LINK.map((element) => {
                                return (
                                    <ListItem key={"list_" + element.name} button component={"a"} href={element.link} target="_blank">
                                        <ListItemIcon>
                                            {element.icon()}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={element.name}
                                            secondary={element.detail}
                                        />
                                        <NavigateNextIcon />
                                    </ListItem>
                                );
                            })}

                        </List>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" className={classes.listTitle}>
                        Applications et autre
                    </Typography>
                    <div className={classes.paperBackground}>
                        <List>
                            {APPLICATIONTION_LINK.map((element) => {
                                return (
                                    <ListItem key={"list_" + element.name} button component={"a"} href={element.link} target="_blank">
                                        <ListItemIcon>
                                            {element.icon()}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={element.name}
                                            secondary={element.detail}
                                        />
                                        <NavigateNextIcon />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;