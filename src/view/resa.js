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
import Image from './association.png';


const useStyles = makeStyles((theme) =>
	({
		carre:{
			backgroundColor: '#cfe8fc',
			height: '100vh',
			marginLeft: 0,
		},

		rectangle:{
			backgroundColor: '#adef98',
			height: '20vh',
			marginLeft:0,
		}, 

		

	})

);





function Resa(){
	const classes = useStyles();

	return(        
			<Container maxWidth= 'md' fixed > {/* balise pour centré*/}
				<Typography component="div" style={{ backgroundColor: '#ff0000', height: '100vh', marginLeft: 0 }} >{/* typography qui crée mes composant*/} 
		       <Container >
		       		<div className = {classes.carre}>
		       			<div className = {classes.rectangle}>

               			 <img src={Image} alt="Image" width="60" height="60"/>
          
		       			</div>
		       		</div>

		       </Container>
		       </Typography>
           </Container> 
	)
}


export default Resa;