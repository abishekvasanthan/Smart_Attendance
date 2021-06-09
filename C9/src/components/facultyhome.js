import '../index.css'
import Navbar from './user-navbar';
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import Link from '@material-ui/core/Link';
import { Chart } from "react-google-charts";
import { blueGrey } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FacultyHome = () => {
  var { id } = useParams()
  const [graph, setGraph] = React.useState([])
  const [data, setData] = React.useState([['Course', 'Avg(Attendance)']])
  const [data1, setData1] = React.useState([])
  React.useEffect(() => {
    async function fn() {
      const response = await fetch(`http://localhost:4000/faculty/home/graph?fid=${id}`)
      const json = await response.json()
      const arr = [['Course', 'Avg(Attendance)']]
      for (var i = 0; i < json.data.length; i++) {
        arr.push([json.data[i].CId, json.data[i].av])

      }
      setData(arr)


    }

    async function fn1() {
      const response = await fetch(`http://localhost:4000/faculty/stats`)
      const json = await response.json()
      var arr = []
      if (json.data.length === 1) {
        if (json.data[0].Ack === 0) {
          arr = [['Discrepancy Status', 'Count'], ['Unacknowledged', json.data[0].cnt], ['Acknowledged', 0]]

        }
        else {
          arr = [['Discrepancy Status', 'Count'], ['Unacknowledged', 0], ['Acknowledged', json.data[0].cnt]]
        }



      }
      else {
        arr = [['Discrepancy Status', 'Count'], ['Unacknowledged', json.data[0].cnt], ['Acknowledged', json.data[1].cnt]]
      }
      setData1(arr)
      console.log(json.data.length)
      // for(var i=0;i<json.data.length;i++){
      //   arr.push([json.data[i].CId,json.data[i].av])

      // }



    }
    fn()
    fn1()





  }, [])

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



  return (
    <div>
      {console.log(data1)}
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' />
      <Navbar message="faculty" />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Grid style={{height:'fit-content',width:'80vw'}} container spacing={3}>
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'4vh'}} item xs={8} >
          <Chart
            width={'60vw'}
            height={'60vh'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              title: 'Avg. Attendance Course-Wise',
              hAxis: {
                title: 'Course',
              },
              vAxis: {
                title: 'Avg(Attendance)',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Grid>
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'4vh'}} item xs={4} >
          <Chart
            width={'30vw'}
            height={'60vh'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data1}
            options={{
              title: 'Message Acknowledgement Status',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Grid>
      </Grid></div>
      <Grid container justify="space-around" spacing={8}>

      </Grid>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'10vh' }}>
        <Grid style={{ width: '80vw' }} container spacing={10}>
          <Grid item xs={12} spacing={24} >
            <Paper onClick={() => { graph.map((g) => { console.log(g.av) }) }} className={classes.paper}>
              <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'black', fontWeight: 'bolder', fontSize: '2em' }} className={classes.title}>
                Welcome Faculty :)
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper style={{ background: 'rgb(60,60,60)' }} className={classes.paper}>
              <Link href="https://intranet.cb.amrita.edu/TimeTable/Faculty/index.php" style={{ fontFamily: 'Kosugi Maru' }} >
                <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white', fontWeight: 'bolder', fontSize: '2em' }} className={classes.title}>
                  View my Timetable
              </Typography>
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={3} >
            <Paper style={{ background: 'rgb(60,60,60)' }} className={classes.paper}>
              <Link href="#" style={{ fontFamily: 'Kosugi Maru' }} onClick={preventDefault}>
                <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white', fontWeight: 'bolder', fontSize: '2em' }} className={classes.title}>
                  Add student Attendance
            </Typography>
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={3} >
            <Paper style={{ background: 'rgb(60,60,60)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={classes.paper}>
              <Link href="" style={{ fontFamily: 'Kosugi Maru' }} onClick={preventDefault1}>
                <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white', fontWeight: 'bolder', fontSize: '2em' }} className={classes.title}>
                  Messages
            </Typography>
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={3} >
            <Paper style={{ background: 'rgb(60,60,60)' }} className={classes.paper}>
              <Link href={`/facultyupdateattendance/${id}`} style={{ fontFamily: 'Kosugi Maru' }}>
                <Typography variant="h3" style={{ fontFamily: 'Kosugi Maru', color: 'white', fontWeight: 'bolder', fontSize: '2em' }} className={classes.title}>
                  Attendance Updation
            </Typography>
              </Link>
            </Paper>
          </Grid>



        </Grid>
      </div>
    </div>
  );
}
export default FacultyHome;