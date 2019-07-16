import React from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import '../Login/Login.scss'
// import './Register.scss';

const Register = () => (
    <div className = 'MainContainer'>
        <div className ="ContainerLogin">
                <div className="LoginMain">
                <h1 className="LoginTitle">Lepsi</h1>
                    <h3 className="LoginSubtitle">¿Sabías que?</h3>
                    <p className="LoginParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">Registrate</h1>
                    <label className="UserLabel" htmlFor="name">Nombre</label>
                    <input className="InputLogin" type="text" id="name"/>
                    <label className="UserLabel" htmlFor="lastname">Apellidos</label>
                    <input className="InputLogin" type="password" id="lastname"/>
                    <label className="UserLabel" htmlFor="password">Contraseña</label>
                    <input className="InputLogin" type="password" id="password"/>
                    <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                    <input className="InputLogin" type="password" id="password"/>
                    <button className="BtnLogin" type="button">Enviar</button>
                </div>
    </div>
    </div>
)

export default Register;