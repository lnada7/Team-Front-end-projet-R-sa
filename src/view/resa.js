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

function resa(){

	return(        
			<Container >
				<Typography component="div" style={{ backgroundColor: '#ff0000', marginLeft: 0 }}  />   
		       <Container >
		       		<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', marginLeft: 0 }}  />
		       </Container>
           </Container> 
	)
}


export default resa;