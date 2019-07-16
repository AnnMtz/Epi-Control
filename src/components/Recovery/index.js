import React from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import './Recovery.scss';

const Recovery = () => (
    <div className = 'MainContainer'>
        <div className ="ContainerLogin">
                <div className="LoginMain">
                <h1 className="LoginTitle">Lepsi</h1>
                    <h3 className="LoginSubtitle">¿Sabías que?</h3>
                    <p className="LoginParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">Restablecer contraseña</h1>
                    <label className="UserLabel" htmlFor="password">Contraseña nueva</label>
                    <input className="InputLogin" type="text" id="password"/>
                    <label className="UserLabel" htmlFor="password">Confirmar contraseña</label>
                    <input className="InputLogin" type="password" id="password"/>
                    {/* <label className="UserLabel" htmlFor="password">Contraseña</label>
                    <input className="InputLogin" type="password" id="password"/> */}
                    {/* <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                    <input className="InputLogin" type="password" id="password"/> */}
                    <button className="BtnLogin" type="button">Restablecer contraseña</button>
                </div>
        </div>
    </div>
)

export default Recovery;