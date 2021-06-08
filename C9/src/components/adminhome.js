import '../index.css'
import Navbar from './navbar';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import { Chart } from "react-google-charts";
import {useEffect} from 'react';
import React from 'react';


const AdminHome = () => {

  useEffect(() => {
    fetch(`http://localhost:4000/admin/student`)
            .then(response => response.json())
            .then(response => setStudents(response.data))
            .catch(err => console.error(err))
  },[])

  const data = [
    ["Course", "Attendance percent(avg.)", { role: "style" }],
    ["15CSE312", 92, "color: gray"],
    ["15CSE386", 83, "color: #76A7FA"],
    ["15MAT112", 89, "color: blue"],
    ["15ENV301", 77, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],

  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '10%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
    },

    titleNumber: {
      backgroundColor: 'rgb(180, 180, 180)'

    }
  }));

  const [students, setStudents] = React.useState('');
  const classes = useStyles();

  const [functionality, setFunctionality] = useState('home');

  const functionalityHandler = (arg) => {
    setFunctionality(arg)
  }



  return (
    
    <div>
      {console.log(students)}
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' />
      <Navbar setFunc={functionalityHandler} />

      {/*--------------------------Admin home---------------------------------------------------- */}

      {functionality === 'home' && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
                  Welcome Admin :)
          </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}><Chart chartType="BarChart" data={data} /></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
                  Students Enrolled
          </Typography>
                <Typography variant="h5" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%' }} className={classes.titleNumber}>
                  {students}
          </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
                  Courses Registered
          </Typography>
                <Typography variant="h5" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%' }} className={classes.titleNumber}>
                  110
          </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
                  Faculty Entries
          </Typography>
                <Typography variant="h5" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%' }} className={classes.titleNumber}>
                  178
          </Typography></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
                  Discrepancy Alerts
          </Typography>
                <Typography variant="h5" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%' }} className={classes.titleNumber}>
                  23
          </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      )}



    </div>
  );
}

export default AdminHome;