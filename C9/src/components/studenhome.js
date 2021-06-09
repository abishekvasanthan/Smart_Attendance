import '../index.css'
import Navbar from './user-navbar';
import * as React from 'react'
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
  const [name,setName]=React.useState('')

  React.useEffect(()=>{
    fetch(`http://localhost:4000/student/home?sid=${id}`)
            .then(response => response.json())
            .then(response => setName(response.data))
            .catch(err => console.error(err))

            
  },[])

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
      {/* <Grid item xs={12} >
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{ fontFamily: 'cursive',color:'firebrick' ,marginTop: '7%',fontWeight:'bolder' }} className={classes.title}>
                “Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.”
          </Typography>               
           <Typography variant="h5" style={{ fontFamily: 'initial', color:'firebrick', marginTop: '7%',fontWeight:'bolder' }} className={classes.title}>
           – Dwayne Johnson
          </Typography>
          </Paper>
          </Grid> */}
    </Grid>
    
<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',}}>
    <Grid style={{width:'85vw'}} container spacing={10}>
      <Grid item xs={12} spacing={24} >
        <Paper className={classes.paper} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black',fontWeight:'bolder',fontSize:'2em' }} className={classes.title}>
          {name&&(`Welcome ${name[0].S_Name} :)`)}      
          </Typography>
        </Paper>
      </Grid>

      <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={4} spacing={24} >
        <Paper className={classes.paper} style={{display:'flex',alignItems:'center',justifyContent:'center',width:'20vw',background:'rgb(60,60,60)'}}>
            <Link href="https://intranet.cb.amrita.edu/TimeTable/" style={{fontFamily:'Kosugi Maru'}} ><Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white',fontWeight:'bolder',fontSize:'2em' }} className={classes.title}>View my Timetable</Typography></Link>
            
        </Paper>
      </Grid>

      <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={4} spacing={24} >
        <Paper className={classes.paper} style={{display:'flex',alignItems:'center',justifyContent:'center',width:'20vw',background:'rgb(60,60,60)'}}>
        
            <Link href="#" style={{fontFamily:'Kosugi Maru'}} onClick={preventDefault}><Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white',fontWeight:'bolder',fontSize:'2em' }} className={classes.title}>View my Attendance</Typography></Link>
            
        </Paper>
      </Grid>

      <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={4} spacing={24} >
        <Paper className={classes.paper} style={{display:'flex',alignItems:'center',justifyContent:'center',width:'20vw',background:'rgb(60,60,60)'}}>
        
            <Link href="" onClick={preventDefault1}><Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white',fontWeight:'bolder',fontSize:'2em' }} className={classes.title}>Messages</Typography></Link>
            
        </Paper>
      </Grid>

      {/* <Grid item xs={6}>
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
      </Grid> */}

      </Grid>
      </div>
     </div>
     );
}
 
export default StudentHome;