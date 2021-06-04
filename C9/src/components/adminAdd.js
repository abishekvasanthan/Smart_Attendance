import '../index.css'
import Navbar from './navbar';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AdminAdd = ({setFunc}) => {
   
    const courseSubmitHandler=(e)=>{
        window.location='/admin/add/course'
        }
    const facultySubmitHandler=(e)=>{
        window.location='/admin/add/faculty'
        }
    const studentSubmitHandler=(e)=>{
        window.location='/admin/add/student'
        }

    return (
    <div>
     <Navbar />
     
         <h4 className="form-header" disableElevation style={{marginTop:'2%', marginBottom:'2%',marginRight:'2%', fontFamily:'Kosugi Maru'}}>Select</h4>
         <div className="form-group">
         <Button type="submit" class="btn btn-primary" variant="contained" color="primary" disableElevation style={{height:'100%', marginLeft:'45%', backgroundColor:'rgb(60,60,60)',fontFamily:'Kosugi Maru'}}>Add Course</Button>
         <IconButton
                onClick={courseSubmitHandler}
                color="inherit"
              >
                  <AddCircleIcon style={{color:"black"}}/>
                  </IconButton>
            </div>
            <div className="form-group">
            <Button type="submit" class="btn btn-primary" variant="contained" color="primary" disableElevation style={{height:'100%', marginLeft:'45%', backgroundColor:'rgb(60,60,60)',fontFamily:'Kosugi Maru'}}>Add Faculty</Button>
            <IconButton onClick={facultySubmitHandler} color="inherit">
                <AddCircleIcon style={{color:"black"}}/>
            </IconButton>
            </div>
            <div className="form-group">
            <Button type="submit" class="btn btn-primary" variant="contained" color="primary" disableElevation style={{height:'100%', marginLeft:'45%', backgroundColor:'rgb(60,60,60)',fontFamily:'Kosugi Maru'}}>Add Student</Button>
                <IconButton onClick={studentSubmitHandler} color="inherit" >
                  <AddCircleIcon style={{color:"black"}}/>
                </IconButton>
            </div>
    </div>
      );
}
 


export default AdminAdd;