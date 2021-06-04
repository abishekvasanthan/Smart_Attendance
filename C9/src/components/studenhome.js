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
import {useParams} from 'react-router-dom'

const StudentHome = () => {
  var {id}=useParams()
    const preventDefault=(e)=>{
        e.preventDefault();
        window.location=`/attendance/${id}`
        }

        const preventDefault1=(e)=>{
          e.preventDefault();
          window.location=`/student/${id}/msg`
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
          backgroundColor:'rgb(180, 180, 180)'
    
        }
      }));
    
      
      const classes = useStyles();
    
      const [functionality, setFunctionality] = useState('home');
    
      const functionalityHandler = (arg) => {
        setFunctionality(arg)
      }
    return ( 
     <div>
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' />
      <Navbar message="student" />
      <Grid container spacing={3}>
      <Grid item xs={12} >
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'cursive',color:'firebrick' ,marginTop: '7%',fontWeight:'bolder' }} className={classes.title}>
                “Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.”
          </Typography>               
           <Typography variant="h5" style={{ fontFamily: 'initial', color:'firebrick', marginTop: '7%',fontWeight:'bolder' }} className={classes.title}>
           – Dwayne Johnson
          </Typography>
          </Paper>
          </Grid>
    </Grid>
    <Grid container justify="space-around" spacing={8}>
  <Grid item xs={12} >
  </Grid>
</Grid>
    <Grid container spacing={10}>
      <Grid item xs={6} spacing={24} >
        <Paper className={classes.paper}>
          <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%',fontWeight:'bolder',fontSize:'250%' }} className={classes.title}>
          Welcome :) 
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black',  marginBottom: '7%',fontWeight:'bolder',fontSize:'250%' }} className={classes.title}>
            <Link href="https://intranet.cb.amrita.edu/TimeTable/" style={{fontFamily:'Kosugi Maru'}} >View my Timetable</Link>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%',fontWeight:'bolder',fontSize:'250%' }} className={classes.title}>
            <Link href="#" style={{fontFamily:'Kosugi Maru'}} onClick={preventDefault}>View my Attendance</Link>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', marginTop: '7%',fontWeight:'bolder',fontSize:'250%' }} className={classes.title}>
            <Link href="" style={{fontFamily:'Kosugi Maru'}} onClick={preventDefault1}>Messages</Link>
            </Typography>
        </Paper>
      </Grid>

      </Grid>
     </div>
     );
}
 
export default StudentHome;