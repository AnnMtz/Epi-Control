import React from 'react';
import Add from '../../Assets/icons/add.png';
import Delete from '../../Assets/icons/delete.png';
import Edit from '../../Assets/icons/edit.png';
// import '../PersonalInformation/PersonalInformation.scss'
import './EmergencyContacts.scss';

const EmergencyContacts = () => (
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
                    <h1 className="PersonalInformationText">Agregar un contacto de emergencia</h1>
                    <img src={Edit} alt="editar"/>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Nombre</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Apellidos</label>
                        <input className="InputLogin" type="text" id="user"/> Años
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Parentesco</label>
                        <input className="InputLogin" type="text" id="user"/> Años
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Teléfono</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Celular</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control-address">
                        <label className="UserLabel" htmlFor="user">Dirección</label>
                        <input className="InputAddress" type="text" id="user"/>
                    </div>
                </div>

                <button className="BtnPersonalInfo" type="button">Guardar</button>
            </div>
        </div>
    </div>
)

export default EmergencyContacts;