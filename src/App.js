import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/index';
import Register from './components/Register/index';
import Recovery from './components/Recovery/index';
import Home from './components/Home/index';
import PersonalInformation from './components/PersonalInformation';
import './App.css';
import CrisisRecord from './components/CrisisRecord';
import TableRegister from './components/TableRegister';
import ScheduleAppointment from './components/ScheduleAppointment';
import MedicalRecord from './components/MedicalRecord';
import EmergencyContacts from './components/EmergencyContacts';
import InformationSaved from './components/InformationSaved';
import RegisterTables from './components/RegisterTables';

class App extends Component{
  render(){
    return(
      <div>
          <Router>
              <Switch>
                  <Route path="/" component={Login} exact/>
                  <Route path="/Home" component={Home}/>
                  <Route path="/Register" component={Register}/>
                  <Route path="/Recovery" component={Recovery}/>
                  <Route path="/PersonalInformation" component={PersonalInformation} exact/>
                  <Route path="/InformationSaved" component={InformationSaved} exact/>
                  <Route path="/MedicalRecord" component={MedicalRecord}/>
                  <Route path="/EmergencyContacts" component={EmergencyContacts}/>
                  <Route path="/InformationSaved" component={InformationSaved}/>
                  <Route path="/CrisisRecord" component={CrisisRecord}/>
                  <Route path="/RegisterTables" component={RegisterTables}/>
                  <Route path="/ScheduleAppointment" component={ScheduleAppointment}/>
                  <Route path="/TableRegister" component={TableRegister}/> 
              </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
