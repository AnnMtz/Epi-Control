import React from 'react';
import Add from '../../Assets/icons/add1.png';
import Delete from '../../Assets/icons/delete.png';
import Edit from '../../Assets/icons/edit.png';
import './InformationSaved.scss';
import { Link } from 'react-router-dom';
import Header from "../Header";

const InformationSaved = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerPersonalInformation'>
        <Header></Header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Información personal</h1>
                    <Link to="/PersonalInformation"><img src={Edit} alt="editar"/></Link>
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
                <Link to="/EmergencyContacts"><img src={Add} className="Addimage" alt="agregar"/></Link>
                {/* <a href="#"><img src={Add} className="Addimage" alt="agregar"/></a> */}

                {/* <button className="BtnPersonalInfo" type="button">Enviar</button> */}
            </div>
        </div>
    </div>
)

export default InformationSaved;