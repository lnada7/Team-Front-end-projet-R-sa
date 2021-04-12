import React from 'react';
import {Link} from "react-router-dom";
import {Box, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';
import Image from '../assets/image/Reservation2.jpg';
import Stepper from './OutilResa/Stepper'

const tailleim = '26px';
const useStyles = makeStyles((theme) =>
	({
		Cadretitre:{
			//display:'flex',
			
			marginLeft:'400px',
			marginTop:'100px',
			backgroundColor: '#ff0000',
			width: '400px',
			height: '100px',

  			
		},

		ImageReservation:{
			backgroundImage: `url(${Image})`,//j'insère une image en bacground du rectangle
			height: '200px',
			margin: 'auto',
		}, 

		

	})

);





function Resa(){
	const classes = useStyles();

	return(  

			
				<Container maxWidth ="md" fixed >

						<div className = {classes.ImageReservation} >
							<div className = {classes.Cadretitre}>

			       			</div>
			       		</div>
						{/**<img src={Image} alt="Image" width="800" height="150"/>*/}{/* j'inserère image de reservation*/}
						<Stepper/>
			       	
			       	
       			</Container>

		      
		       
           
	)
}


export default Resa;