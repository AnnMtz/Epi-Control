import React from 'react';
import Logo from '../../Assets/img/logo.png';
import './Newpassword.scss';
import Header from '../Header'

const Newpassword = () => (
    <div className = 'MainContainer'>
        <div className ="ContainerLogin">
        <Header></Header>
                <div className="LoginMain">
                <h1 className="LoginTitle">Lepsi</h1>
                    <h3 className="LoginSubtitle">¿Sabías que?</h3>
                    <p className="LoginParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">¿No recuerdas tu contraseña?</h1>
                    <h3 className="WelcomeSubtitle">¡No te preocupes! Nos sucede a todos. Ingresa tu email y te ayudaremos.</h3>
                    <label className="UserLabel" htmlFor="email">Correo</label>
                    <input className="InputLogin" type="text" id="email"/>
                    {/* <label className="UserLabel" htmlFor="password">Contraseña</label>
                    <input className="InputLogin" type="password" id="password"/> */}
                    {/* <a className="LinkPassword" href="#">¿Olvidaste tu contraseña?</a>
                    <a className="LinkRegister" href="">Registrate</a> */}
                    <button className="BtnLogin" type="button">Solicitar</button>
                </div>
        </div>
    </div>
)

export default Newpassword;