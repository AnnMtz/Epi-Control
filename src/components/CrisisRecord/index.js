import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
// import '../ScheduleAppointment.scss'
import './CrisisRecord.scss';

const CrisisRecord = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <header>
            <nav className="Menu">
                <div class="Logo">
                        <h1>Lepsi</h1>
                        <a href="#" class="Btn-menu" id="btn-menu"><img id="btnMenu" src="img/menu.png" alt=""/></a>
                </div>
                <div className="Enlaces" id="enlaces">
                    <a href="#">Información personal</a>
                    <a href="#">Registro médico</a>
                    <a href="#">Historial de crisis</a>
                </div>
            </nav>
            </header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Registra tus crisis aquí, lleva un control de
                    las mismas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Día</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Duración</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Tipo</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <button className="BtnPersonalInfo" type="button">Guardar</button>
                </div>
        </div>
    </div>
)

export default CrisisRecord;