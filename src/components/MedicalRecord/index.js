import React from 'react';
import Add from '../../Assets/icons/add1.png';
import './Medicalrecord.scss';

const MedicalRecord = () => (
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
                    <h1 className="PersonalInformationText">Registro Médico</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Diagnóstico</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Años de diagnóstico</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Medicamento</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Dosis</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Horario</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <div className="Agenda">
                    <h3>Agenda tus citas medicas</h3>
                    <a href=""><img src={Add} alt="agregar"/></a>
                </div>

                <button className="BtnPersonalInfo" type="button">Guardar</button>
            </div>
        </div>
    </div>
)

export default MedicalRecord;