import React from 'react';
import './ScheduleAppointment.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';

const ScheduleAppointment = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerScheduleAppointment'>
            <Header></Header>
            <div className="ScheduleAppointmentInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Agenda tus citas médicas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Fecha</label>
                        <input className="InputLogin" type="date" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
               <Link to="/MedicalRecord">
                    <button className="BtnPersonalInfo" type="button">Guardar</button>
                </Link>
            </div>
        </div>
    </div>
)

export default ScheduleAppointment;