import React from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import './Recovery.scss';

const Recovery = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerRegister'>
            <header>
                <div className="ContainerImageRetrun">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="RecoveryTitle">RECUPERAR CONTRASEÑA</h1>
                <div className="ContainerImageLogo">
                    <img className="Logo" src={Logo} alt='logo'/>
                </div>
            </header>
            <div className="RecoverInfoContainer">
                <h3 className="Recovery">Ingresa tu correo y te haremos llegar un link para que modifiques tu contraseña y puedas acceder nuevamente.</h3>
                <form className="FormRecovery">
                    <div className="InfoContainer">
                        <label className="Email">Correo <br/></label>
                            <input className="EmailInput" placeholder="Ingresa tu correo"></input>
                    </div>
                    <div className="ButtonRecoveyContainer">
                        <button className="ButtonRecovery">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Recovery;