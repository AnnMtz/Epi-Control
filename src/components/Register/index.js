import React from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import '../Register/Register.scss'
// import './Register.scss';

const Register = () => (
    <div className = 'MainContainerRegister'>
        <div className ="ContainerRegister">
                <div className="RegisterMain">
                <h1 className="RegisterTitle">Lepsi</h1>
                    <h3 className="RegisterSubtitle">¿Sabías que?</h3>
                    <p className="RegisterParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">Registrate</h1>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="name">Nombre</label>
                        <input className="InputRegister" type="text" id="name"/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="lastname">Apellidos</label>
                        <input className="InputRegister" type="password" id="lastname"/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password">Contraseña</label>
                        <input className="InputRegister" type="password" id="password"/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                        <input className="InputRegister" type="password" id="password"/>
                    </div>
                    <button className="BtnRegister" type="button">Enviar</button>
                </div>
    </div>
    </div>
)

export default Register;