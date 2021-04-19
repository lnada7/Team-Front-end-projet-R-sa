import React from 'react';
import {Link} from "react-router-dom";
import {Switch, Box, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';

import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>
	({
		CadreSousTitre:{
			position:'relative',
			top:'50px',
			backgroundColor:'#4888EA',
			width: '75%',
			height: '100px',
			margin: 'auto',
    	},

    	SousTitre:{
    		position:'relative',
			top:'25px',
	    	fontSize:'28px',
	    	fontWeight:'bold',
	    	color: 'white',
	    	textAlign:'center',
	    	lineHeight: '1.5',
    	},

		CadreExterieurDescription:{
			position:'relative',
			top:'100px',
			backgroundColor:'#D3E6F0',
			width: '100%',
			height: '800px',
			margin: 'auto',
    	},

		CadreNomElement:{
			position:'relative',
			top:'5%',
			right:'35%',
	    	backgroundColor:'#FFFFFF',
	    	width:'20%',
	    	height:'10%',
			margin: 'auto',
    	},

    	NomElement:{
    		position:'relative',
			top:'10%',
			textAlign:'center',
	    	fontSize:'25px',
	    	fontWeight:'bold',
	    	color: '#4888EA',


    	},

		CadreInterieurDescription:{
			position:'relative',
			top:'10%',
			backgroundColor:'#FFFFFF',
			width: '85%',
			height: '65%',
			margin: 'auto',
    	},

    	CadreTexteDescription:{
			position:'relative',
			top:'5%',
			//right:'10%',
	    	backgroundColor:'#AAFFA3',
	    	width:'90%',
	    	height:'20%',
			margin: 'auto',
    	},

    	TexteDescription:{
    		position:'relative',
			top:'10%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	CadreTexteType:{
			position:'relative',
			top:'10%',
			//right:'10%',
	    	backgroundColor:'#D3E6F0',
	    	width:'90%',
	    	height:'10%',
			margin: 'auto',
    	},

    	TexteType:{
    		position:'relative',
			top:'10%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	CadreTexteAssos:{
			position:'relative',
			top:'15%',
			//right:'10%',
	    	backgroundColor:'#ffa2a2',
	    	width:'90%',
	    	height:'10%',
			margin: 'auto',
    	},

    	TexteAssos:{
    		position:'relative',
			top:'10%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	CadreDisponible:{
			position:'relative',
			top:'20%',
			right:'35%',
	    	backgroundColor:'#D1D1D1',
	    	width:'20%',
	    	height:'15%',
			margin: 'auto',
    	},

    	Disponible:{
    		position:'relative',
			top:'15%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	CadreTexteCaution:{
			position:'relative',
			top:'5%',
			left:'35%',
	    	backgroundColor:'#D1D1D1',
	    	width:'20%',
	    	height:'10%',
			margin: 'auto',
    	},

    	TexteCaution:{
    		position:'relative',
			top:'15%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	CadreQuantite:{
			position:'relative',
			top:'15%',
			left:'35%',
	    	backgroundColor:'#D1D1D1',
	    	width:'20%',
	    	height:'10%',
			margin: 'auto',
    	},

    	Quantite:{
    		position:'relative',
			top:'15%',
			left:'1.5%',
			textAlign:'left',
	    	fontSize:'15px',
	    	//fontWeight:'bold',
	    	color: '#000000',
    	},

    	BoutonRetour:{

    	},

      	BoutonReserver:{

    	},

    	Vert:{
    		color:'green',
    	},

    	Red:{
    		color:'red',
    	},


	})
);
function Disponible(statut){
	const classes = useStyles();
	return (statut === true ? <div className={classes.Vert}>Disponible</div> : <div className={classes.Red}>Non-Disponible</div>);
}


function Reservation(){
	
	const classes = useStyles();
	const nom = 'Crêpière';
	const description = "Crêpière classique pour faire réchauffer des crêpes. Dimension 40 x 12 cm. Attention le câcle d'alimentation se décroche un peu";
	const type = 'Electromenager';
	const assos = 'Carnaval Humanitaire';
	const statut = true;
	const caution = 50;

	return(
		<div>


				<div className={classes.CadreSousTitre}>
					<div className={classes.SousTitre}>
						RESERVER UN ELEMENT
					</div>
				</div> 

				<div className={classes.CadreExterieurDescription}>
					<div className={classes.CadreNomElement}>
						<div className={classes.NomElement}>
							{nom}
						</div>
					</div>

					<div className={classes.CadreInterieurDescription}>

						<div className={classes.CadreTexteDescription}>
							<div className={classes.TexteDescription}>
								<strong>Description</strong>: {description}
							</div>
						</div>

						<div className={classes.CadreTexteType}>
							<div className={classes.TexteType}>
								<strong>Type</strong>: {type}
							</div>
						</div>

						<div className={classes.CadreTexteAssos}>
							<div className={classes.TexteAssos}>
								<strong>Assos</strong>: {assos}
							</div>
						</div>

						<div className={classes.CadreDisponible}>
							<div className={classes.Disponible}>
								<strong>Statut</strong>: {Disponible(statut)}
							</div>
						</div>

						<div className={classes.CadreTexteCaution}>
							<div className={classes.TexteCaution}>
								<strong>Caution</strong>: {caution} €/pcs
							</div>
						</div>

						<div className={classes.CadreQuantite}>
							<div className={classes.Quantite}>
								<strong>Quantité</strong>:
							</div>
						</div>						

					</div>

				   	<Button
				   	component={RouterLink}
				   	to="/resa"
				   	variant="contained"
			    	color="secondary"
			    	className={classes.button}
			    	>
				   		<strong>RETOUR</strong> 
				    </Button>	

				   	<Button
				   	component={RouterLink}
				   	variant="contained"
			    	color="primary"
			    	className={classes.button}
			    	>
				   		<strong>RESERVER</strong> 
				    </Button>					    				
				</div>

		</div>

		)
}

export default Reservation;

{/*card, parper*/}