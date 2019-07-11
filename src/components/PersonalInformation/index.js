import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './PersonalInformation.scss';

const PersonalInformation = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerPersonalInformation'>
            <header>
                <div className="ContainerImageReturn">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="PersonalInformationTitle">EPI-CONTROL</h1>
                <div className="ContainerImageAvatar">
                    <img className="Avatar" src={Avatar} alt='avatar'/>
                </div>
            </header>
            <div className="PersonalInformationInfoContainer">
                <h3 className="PersonalInformationText">Información personal</h3>
                <h5 className="PersonalInformationSubtext">Complementa tu información personal para tener todos tus datos completos.</h5>
                <form className="FormPersonalInformation">
                    <div className="InfoContainer">
                        <label className="text">Fecha de nacimiento</label>
                        <input className="PersonalInfoInput" placeholder="Ingresa tu fecha de nacimiento"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Edad</label>
                            <input className="PersonalInfoInput" placeholder="Ingresa tu edad"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Dirección</label>
                            <input className="PersonalInfoInput"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Teléfono</label>
                            <input className="PersonalInfoInput" placeholder="Ingresa tu teléfono"></input>
                    </div>
                    <div className="EmergencyContacts">
                        <h3 className="EmergencyContactsText">Aquí puedes agregar los contactos de emergencia, editar y/o eliminarlos.</h3>
                        <div className="AddImage">
                            <img className="AddImg" src={Add}></img>
                        </div>
                    </div>
                    <div className="ButtonHomeContainer">
                        <button className="ButtonPersonalInformation">Enviar</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
)

export default PersonalInformation;