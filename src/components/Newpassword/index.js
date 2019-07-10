import React from 'react';
import Logo from '../../Assets/img/logo.png';
import './Newpassword.scss';

const Newpassword = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerNewpassword'>
            <header>
                <div className="ContainerImageRetrun">
                    {/* <img className="ReturnImg" src={Return} alt='return'/> */}
                </div> 
                <h1 className="NewpasswordTitle">Registro</h1>
                <div className="ContainerImageLogo">
                    <img className="Logo" src={Logo} alt='logo'/>
                </div>
            </header>
            <hr/>
            <div className="NewpasswordInfoContainer">
                <h3 className="Newpassword">Ingresa nueva una nueva contraseña.</h3>
                <form className="FormNewpassword">
                    <div className="InfoContainer">
                        <label className="Email">Correo <br/>
                            <input className="EmailInput" placeholder="Ingresa tu correo"></input>
                        </label>
                    </div>
                    <div className="InfoContainer">
                        <label className="ConfirmEmail">Confirma tu correo <br/>
                            <input className="ConfirmEmailInput" placeholder="Confirma tu correo"></input>
                        </label>
                    </div>
                    <div className="ButtonNewpasswordContainer">
                        <button className="ButtonNewpassword">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Newpassword;