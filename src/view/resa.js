import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,

} from "react-router-dom";
import Reservation from "./Reservation.js";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Image from '../assets/image/Reservation.jpg';
import { Box, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Stepper from './OutilResa/Stepper.js';





const backgroundhauteur = 200;//constante pour la hauteur de l'image
const Cadrehauteur = backgroundhauteur/2; // constatne pour la hauteur du CadreTitre
const useStyles = makeStyles((theme) =>
  ({
  	root: {
    	width: '100%',

  	},

    //on insère une image en background dans un cadre
    //on met la largeur en pourcentage pour que le cadre s'adapte peut importe l'écran
    ImageReservation:{
      backgroundImage: `url(${Image})`,
      width: '100%',
      height: `${backgroundhauteur}px`,
      margin: 'auto',
    },

    // mise en place du cadre rouge à l'interieur de l'image
    Cadretitre:{
      position: 'relative',
      left:'25%',
      top:'20%',
      backgroundColor: '#ff0000',
      //% pour adapter à la taille de l'ecran
      width: '50%',
      height : '50%',     
      color : '#FFFFFF',
      fontWeight : 'bold',
      fontSize : '20px',
      //pour laisser l'espace entre le haut du cadre  et le texte
      paddingTop : '',

        
    },

    //mise en place du titre à l'interieur du Cadretitre
    Titre:{
    	fontSize:'32px',
    	fontWeight:'bold',
    	color: 'white',
    	textAlign:'center',
    	verticalAlign:'middle',
    	lineHeight:'1.5',
    },

    // mise en place du cadre bleu où on insère la zone de recherhce et le filtre
    CadreFiltre: {
      postion:'relative',
      backgroundColor :'#0040ff',
      height : '300px'

    },

    // mise en place du cadre rouge où on insère la grille de bouton
    CadreGrille: {
      position: 'relative',
      backgroundColor: '#ff0000',
      height : '500px',

    },

    //positionne le bouton de redirection 
    button:{
    	position:'relative',
    	top:'20px'
    }
  })

);




export default function Resa() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth ="lg" >
        <div className={classes.root}>

          {/*Image + cadreTitre + Titre du site résa*/}
          <div className = {classes.ImageReservation} >
            <div className = {classes.Cadretitre}>
              PLATEFORME DE RESERVATION
            </div>
          </div>

          {/*j'utilise ma fonction MesRoutes qui me génère mes routes de mes 
          fonctions qui vont afficher le contenu de la vue Resa */}
          <Router>
            <MesRoutes />
          </Router>


        </div>
      </Container>
    </div>
  );
}

function MesRoutes() {
  return (
    <div>
      <Switch >
    {/*La fonction ResaMain est ce qui est afficher de base quand on lance la page Resa, pour l'appeler il faut utiliser le path /Resa*/}
        <Route exact path="/resa" children={<ResaMain />} />
      {/*Pour afficher la fonction Reservation il faut l'appeler à l'aide du path : /resa/Reservation.*/}
        <Route path="/resa/Reservation" children={<Reservation />} />
      </Switch>
    </div>
  );
}



function ResaMain() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth ="lg" fixed>
        {/*Dans ce container on appel le Stepper dispo dans /OutilResa/Stepper.js*/}
        <Stepper/>
        
        <div className={classes.CadreFiltre}>
          {/*on insère notre zone de recherche pas encore fonctionnelle dans un cadre blue */}
          <input type= "search"></input>
          {/*ainsi que la 1er case de notre filtre */}
          <input type="checkbox"></input>
          <label></label>
        </div>
      </Container>

      <Container maxWidth ="lg" fixed >
        <div className = {classes.CadreGrille} >
      {/*dans un container rouge on met une grille de bouron */}
        <Grid countainer spacing ={4}>
          <Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid>
          <Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid><Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid><Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid><Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid>
          <Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid>

          <Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid>

          <Grid item xs={7}> 
            <Button color='#ffffff'>
              Ballon de basket
            </Button>
          </Grid>

        </Grid>
        </div>

      {/*en bas du container on met en place un bouton de redirection qui 
      réfère la fonction Reservation grâce au path resa/Resaervation*/}
        <Button
        component={RouterLink}
        to="/resa/Reservation"
        variant="contained"
        color="primary"
        className={classes.button}
        >
            Reserver ton objet 
        </Button>

      </Container>
    </div>
  );
}


