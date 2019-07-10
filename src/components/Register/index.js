import React from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import './Register.scss';

const Register = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerRegister'>
            <header>
                <div className="ContainerImageRetrun">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="RegisterTitle">Registro</h1>
                <div className="ContainerImageLogo">
                    <img className="Logo" src={Logo} alt='logo'/>
                </div>
            </header>
            <hr/>
            <div className="RegisterInfoContainer">
                <span>Ingresa tu nombre de usuario y contraseña</span>
                <form className="FormRegister">
                    <div className="InfoContainer">
                        <label className="UserName">Nombre <br/>
                            <input className="NameInput" placeholder="Escribe tu nombre"></input>
                        </label>
                    </div>
                    <div className="InfoContainer">
                        <label className="UserLastname">Apellidos <br/>
                            <input className="LastnameInput" placeholder="Escribe tus apellidos"></input>
                        </label>
                    </div>
                    <div className="InfoContainer">
                        <label className="Password">Contraseña <br/>
                            <input className="PasswordInput" placeholder="Escribe tu contraseña"></input>
                        </label>
                    </div>
                    <div className="InfoContainer">
                        <label className="ConfirmPassword">Confirma tu contraseña <br/>
                            <input className="ConfirmPasswordInput" placeholder="Confirma tu contraseña"></input>
                        </label>
                    </div>
                    <div className="ButtonRegisterContainer">
                        <button className="ButtonRegister">Iniciar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Register;