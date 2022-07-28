import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'react-calendar/dist/Calendar.css';
import Grid from '@material-ui/core/Grid';
// import DehazeIcon from '@material-ui/icons/Dehaze';
// import {useSelector} from 'react-redux';
// import { useHistory } from "react-router-dom";
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Calendar from 'react-calendar';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PersonIcon from '@material-ui/icons/Person';
import { Zoom } from 'react-slideshow-image';
// import "react-slideshow-image/dist/styles.css";
import nature1 from "./images/nature1.jpg";
import nature2 from "./images/nature2.jpg";
import nature3 from "./images/nature3.jpg";


const images = [nature1,nature2,nature3];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.2,
  arrows: true
};

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: 'white',
          backgroundColor:'#398ccc',
          fontSize:'35px'
      
        },
        Grid: {
            backgroundColor:'lightgreen'
        },
      
        footer: {
         
       backgroundColor:'#398ccc',
      //  position:'absolute',
       bottom:'0',
       width:'100%',
        height:'60px',   /* Height of the footer */
       background:'#6cf'
          
        }
      }));
      function Demo() {
        const [value, onChange] = useState(new Date());
        const classes = useStyles();
   
    return(
        <div>
             <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper className={classes.paper}> <b> <button style={{float:'left',
    height:'30px'}}> <DehazeIcon /> </button>Home Page</b> <PersonIcon style={{float:'right',
    height:'43px',width:'50px'  }}/>  </Paper>
   
        </Grid>
        </Grid>

  {/* <Calendar
        onChange={onChange}
        value={value}
      /> */}

  <div className="slide-container"> 
        <Zoom {...zoomOutProperties} >
          {
            images.map((each, index) => <img key={index} style={{ width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
{/* 
        <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
          <Paper className={classes.footer}>  </Paper>       
         
         
        </Grid>
        </Grid> */}


        </div>
    )
}
export default Demo
