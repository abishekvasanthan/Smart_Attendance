import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FacultyHome from './facultyhome';
import Homemain from './homemain';
import StudentHome from './studenhome'
import AdminHome from './adminhome';
import AdminAdd from './adminAdd';
import FacultyAdd from './facultyAdd';
import CourseAdd from './courseAdd';
import StudentAdd from './studentAdd'
import Password from './forgot_pass';
import Email from './get_email';
import Logout from './logout';
import Modifystudent from './modifystudent';
import AdminModify from './adminModify';
import Modifyfaculty from './modifyfaculty';
import Modifycourse from './modifycourse';
import StudentDelete from './studentDelete';
import AdminDelete from './adminDelete';
import FacultyDelete from './facultyDelete';
import CourseDelete from './courseDelete';
import StudentAttendance from './studentAttendance';
import AddAttendance from './addAttendance';
import Assign from './assign';
import Studentmsg from './studentmessage';
import Facultymsg from './facultyMessage';
import UpdateAttendance from './updateAttendance';

const Students=[
  {
    'id':'Cse18237',
    'S_Name':'Manoj',
    'S_Username':'manojkumar',
    'S_Password':'manojkumar',
    'C_elective':'Open lab python',
    'S_Dept':'Computer Science',
    'S_Sec':'C',
    'S_Sem':'6',
  },

  {
    'id':'Cse18203',
    'S_Name':'Abishek',
    'S_Username':'abishek',
    'S_Password':'Vasanthan',
    'C_elective':'Open lab python',
    'S_Dept':'Computer Science',
    'S_Sec':'C',
    'S_Sem':'6',
  },

  {
    'id':'Cse18233',
    'S_Name':'Manoj',
    'S_Username':'manojkumar',
    'S_Password':'manojkumar',
    'C_elective':'Open lab java',
    'S_Dept':'Computer Science',
    'S_Sec':'C',
    'S_Sem':'4',
  }
  ,
  {
    'id':'Cse18246',
    'S_Name':'Roshni',
    'S_Username':'Rajesh',
    'S_Password':'I love manoj',
    'C_elective':'manoj',
    'S_Dept':'Computer Science',
    'S_Sec':'C',
    'S_Sem':'5',
  }
]

const Faculties=[
{
    'id':'asdfgf',
    'F_Name':'Manoj',
    'F_Username':'manojkumar',
    'F_Password':'manojkumar',
    'F_Dept':'Computer Science',
},

{
  'id':'lkjhj',
  'F_Name':'Abishek',
  'F_Username':'abishek',
  'F_Password':'vasanthan',
  'F_Dept':'ECE',
},

{
  'id':'qwerty',
  'F_Name':'Aswanth',
  'F_Username':'Aswanth',
  'F_Password':'Ragavendra',
  'F_Dept':'Mechanical',
}
]

const Courses=[
  {
      'id':'15CSE202',
      'C_Name':'DataStructures',
      'C_Sem':'3',
      'C_Type':'Core',
  },
  
  {
    'id':'15CSE432',
    'C_Name':'Machine Learning',
    'C_Sem':'6',
    'C_Type':'Core',
  },

  
  {
    'id':'15CSE336',
    'C_Name':'Biometrics',
    'C_Sem':'6',
    'C_Type':'Elective',
  }
]

const HomeRoute = () => {
    return (
        <Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homemain />
            </Route>
            <Route exact path="/student/:id">
              <StudentHome />
            </Route>
            <Route exact path="/faculty/:id">
              <FacultyHome />
            </Route>
            <Route exact path="/admin">
              <AdminHome />
            </Route>
            <Route exact path="/attendance/:id">
              <StudentAttendance />
            </Route>
            <Route exact path="/add-attendance/:id">
              <AddAttendance />
            </Route>
            <Route exact path="/admin/add">
              <AdminAdd />
            </Route>
            <Route exact path="/admin/add/course">
              <CourseAdd />
            </Route>
            <Route exact path="/admin/add/faculty">
              <FacultyAdd />
            </Route>
            <Route exact path="/admin/add/student">
              <StudentAdd />
            </Route>
            <Route exact path="/password">
              <Password />
            </Route>
            <Route exact path="/email">
              <Email />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/admin/modify/student">
              <Modifystudent Students={Students}/>
            </Route>
             <Route exact path="/admin/modify/faculty">
              <Modifyfaculty Faculties={Faculties}/>
            </Route>
            <Route exact path="/admin/modify/course">
              <Modifycourse Courses={Courses}/>
            </Route> 
            <Route exact path="/admin/modify">
              <AdminModify/>
            </Route>
            <Route exact path="/admin/delete">
              <AdminDelete/>
            </Route>
            <Route exact path="/admin/delete/student">
              <StudentDelete Students={Students}/>
            </Route>
            <Route exact path="/admin/delete/faculty">
              <FacultyDelete Faculties={Faculties}/>
            </Route>
            <Route exact path="/admin/delete/course">
              <CourseDelete Courses={Courses}/>
            </Route>
            <Route exact path="/admin/assign">
              <Assign Courses={Courses}/>
            </Route>
            <Route exact path="/student/:id/msg">
              <Studentmsg/>
            </Route>
            <Route exact path="/faculty/:id/msg">
              <Facultymsg/>
            </Route>
            <Route exact path="/facultyupdateattendance/:id">
              <UpdateAttendance/>
            </Route>
          </Switch>
        </div>
    </Router>

      );
}
 
export default HomeRoute;