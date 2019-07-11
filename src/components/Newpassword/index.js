import React from 'react';
import Logo from '../../Assets/img/logo.png';
import './Newpassword.scss';

const Newpassword = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerNewpassword'>
            <header>
                <div className="ContainerImageRetrun">
                </div> 
                <h1 className="NewpasswordTitle">RECUPERAR CONTRASEÑA</h1>
                <div className="ContainerImageLogo">
                    <img className="Logo" src={Logo} alt='logo'/>
                </div>
            </header>
            <div className="NewpasswordInfoContainer">
                <h3 className="Newpassword">Ingresa nueva una nueva contraseña.</h3>
                <form className="FormNewpassword">
                    <div className="InfoContainer">
                        <label className="Email">Correo <br/></label>
                            <input className="EmailInput" placeholder="Ingresa tu correo"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="Email">Confirma tu correo <br/></label>
                            <input className="EmailInput" placeholder="Confirma tu correo"></input>
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