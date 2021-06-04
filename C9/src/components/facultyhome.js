import '../index.css'
import Navbar from './user-navbar';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import Link from '@material-ui/core/Link';
import { blueGrey } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FacultyHome = () => {
  var { id } = useParams()
  console.log(id)
  const preventDefault = (e) => {
    e.preventDefault();
    window.location = `/add-attendance/${id}`
  }

  const preventDefault1 = (e) => {
    e.preventDefault();
    window.location = `/faculty/${id}/msg`
  }

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


  const classes = useStyles();

  const [functionality, setFunctionality] = useState('home');

  const functionalityHandler = (arg) => {
    setFunctionality(arg)
  }

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' />
      <Navbar message="faculty" />
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
          {/* <Paper className={classes.paper}>
            <Typography variant="h4" style={{ fontFamily: 'cursive', color: 'firebrick', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
              “Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.”
            </Typography>
            <Typography variant="h5" style={{ fontFamily: 'initial', color: 'firebrick', marginTop: '7%', fontWeight: 'bolder' }} className={classes.title}>
              – Dwayne Johnson
            </Typography>
          </Paper> */}
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={8}>
        <Grid item xs={12} >
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6} spacing={24} >
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
              Welcome Faculty :)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginBottom: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
              <Link href="https://intranet.cb.amrita.edu/TimeTable/Faculty/index.php" style={{ fontFamily: 'Kosugi Maru' }} >View my Timetable</Link>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
              <Link href="#" style={{ fontFamily: 'Kosugi Maru' }} onClick={preventDefault}>Add student Attendance</Link>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
              <Link href="" style={{ fontFamily: 'Kosugi Maru' }} onClick={preventDefault1}>Messages</Link>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%', fontWeight: 'bolder', fontSize: '250%' }} className={classes.title}>
              <Link href={`/facultyupdateattendance/${id}`} style={{ fontFamily: 'Kosugi Maru' }}>Attendance Updation</Link>
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
export default FacultyHome;