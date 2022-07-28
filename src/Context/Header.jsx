import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import 'react-calendar/dist/Calendar.css';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: 'black',
    //   backgroundColor:'#808fa8',
    //   fontSize:'20px'
  
    // },
    // Grid: {
    //     backgroundColor:'lightgreen'
    // },

    side:{
        float:'left',
        fontSize:'25px',
        color:'white'
    }, 

  
    Header: {
     
        // marginTop: '1rem',
        padding: '2rem',
        backgroundColor: '#1333d1',
        // position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
      
    }}));


function Header() {
    const classes = useStyles();
    return(
        <div>
            
            <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
          <Paper className={classes.Header}> 
          <div className={classes.side}>
          <a  href="#home" >Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
          </div>
            </Paper>       
         
         
        </Grid>
        </Grid>

           

        </div>
    )
}

export default Header