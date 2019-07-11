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
            <div className="RegisterInfoContainer">
                <p>Ingresa tu nombre de usuario y contraseña</p>
                <form className="FormRegister">
                    <div className="InfoContainer">
                        <label className="User">Nombre <br/></label>
                            <input className="UserInput" placeholder="Escribe tu nombre"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="User">Apellidos <br/></label>
                            <input className="UserInput" placeholder="Escribe tus apellidos"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="User">Contraseña <br/></label>
                            <input className="UserInput" placeholder="Escribe tu contraseña"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="User">Confirma tu contraseña <br/></label>
                            <input className="UserInput" placeholder="Confirma tu contraseña"></input>
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