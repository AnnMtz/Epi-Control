import React from 'react';
// import Avatar from '../../Assets/icons/avatar.png';
// import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import Edit from '../../Assets/icons/edit.png'
import './PersonalInformation.scss';

const PersonalInformation = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerPersonalInformation'>
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
                    <h1 className="PersonalInformationText">Información personal</h1>
                    <img src={Edit} alt="editar"/>
                </div>
                <h5 className="Subtext">Complementa tu información personal  para tener todos tus datos.</h5>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Fecha de <br/>nacimiento</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Edad</label>
                        <input className="InputLogin" type="text" id="user"/> Años
                    </div>
                    <div className="Form-control-address">
                        <label className="UserLabel" htmlFor="user">Dirección</label>
                        <input className="InputAddress" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Teléfono</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Celular</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <h3 className="EmergencyText">Contactos de emergencia</h3>
                <h5 className="EmergencySubtext">Aquí puedes agregar tus contactos de emergencia, editar y/o eliminarlos como tu prefieras.</h5>
                <a href="#"><img src={Add} className="Addimage" alt="agregar"/></a>

                <button className="BtnPersonalInfo" type="button">Enviar</button>
            </div>
        </div>
    </div>
)

export default PersonalInformation;