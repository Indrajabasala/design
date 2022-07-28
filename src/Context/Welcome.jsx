import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'react-calendar/dist/Calendar.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'black',
      backgroundColor:'#808fa8',
      fontSize:'20px'
  
    },
    Grid: {
        backgroundColor:'lightgreen'
    },
  
    footer: {
     
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#808fa8',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
      
    },

    nav : {
        float: 'left',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px'
      },

      active : {
        backgroundColor: '#4CAF50',
        color: 'white'
      },
      topnav: {
        overflow: 'hidden',
        backgroundColor: '#333'
      }

  }));
function Welcome() {
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
        <div className={classes.nav}>
  <a  className={classes.active} href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
   
        </Grid>
        </Grid> 
        <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
          <Paper className={classes.footer}>  </Paper>       
         
         
        </Grid>
        </Grid>

        </div>
    )
}
export default Welcome