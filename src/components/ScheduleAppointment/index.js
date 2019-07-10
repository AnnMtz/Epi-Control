import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import './ScheduleAppointment.scss';

const ScheduleAppointment = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
            <header>
                <div className="ContainerImageReturn">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="ContactsInformationTitle">EPI-CONTROL</h1>
                <div className="ContainerImageAvatar">
                    <img className="Avatar" src={Avatar} alt='avatar'/>
                </div>
            </header>
            <div className="ContacsInformationInfoContainer">
                <h3 className="ContactsInformationText">AGENDA TUS CITAS MÉDICAS</h3>
                <form className="FormContactsInformation">
                    <div className="InfoContainer">
                        <label className="text">Fecha:</label>
                            <input className="ContactInfoInput" placeholder="Ingresa la fecha de tu cita"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Hora:</label>
                            <input className="ContactInfoInput" placeholder="Ingresa la hora"></input>
                    </div>
                    <div className="ButtonHomeContainer">
                        <button className="ButtonPersonalInformation">Guardar</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
)

export default ScheduleAppointment;