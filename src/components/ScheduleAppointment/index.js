import React from 'react';
import './ScheduleAppointment.scss';
import Header from '../Header';

const ScheduleAppointment = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <Header></Header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Agenda tus citas médicas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Fecha</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <button className="BtnPersonalInfo" type="button">Guardar</button>
                </div>
            </div>
        </div>
)

export default ScheduleAppointment;