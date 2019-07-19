import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const App = () => {
//     <BrowserRouter>
//         <switch>
//             <Route path="/" component={Login}/>
//             <Route path="/Home" component={Home}/>
//             <Route path="/Register" component={Register}/>
//             <Route path="/Recovery" component={Recovery}/>
//             <Route path="/PersonalInformation" component={PersonalInformation} exact/>
//             <Route path="/MedicalRecord" component={MedicalRecodr}/>
//             <Route path="/InformationSaved" component={InformationSaved}/>
//             <Route path="/RegisterTables" component={RegisterTables}/>
//             <Route path="/ScheduleAppointment" component={ScheduleAppointment}/>
//             <Route path="/TableRegister" component={TableRegister}/> 
//         </switch>
//     </BrowserRouter>
// }
