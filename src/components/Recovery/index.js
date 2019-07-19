import React, { Component } from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import './Recovery.scss';

const Recovery = () => (
    <div className = 'MainContainerRecovery'>
        <div className ="ContainerRecovery">
                <div className="RecoveryMain">
                <h1 className="RecoveryTitle font-tangerine">Lepsi</h1>
                    <h3 className="RecoverySubtitle">¿Sabías que?</h3>
                    <p className="RecoveryParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">Restablecer contraseña</h1>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password">Contraseña nueva</label>
                        <input className="InputRecovery" type="text" id="password"/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password">Confirmar contraseña</label>
                        <input className="InputRecovery" type="password" id="password"/>
                    </div>
                    {/* <label className="UserLabel" htmlFor="password">Contraseña</label>
                    <input className="InputRecovery" type="password" id="password"/> */}
                    {/* <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                    <input className="InputRecovery" type="password" id="password"/> */}
                    <button className="BtnRecovery" type="button">Restablecer contraseña</button>
                </div>
        </div>
    </div>
)

export default Recovery;