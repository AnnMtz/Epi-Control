import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Menu from '../../Assets/icons/menu.png';
import './Home.scss';

const Home = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerHome'>
            <header>
                <div className="ContainerImageAvatar">
                    <img className="AvatarImg" src={Avatar} alt='avatar'/>
                </div> 
                <h1 className="HomeTitle">EPI-CONTROL</h1>
                <div className="ContainerImageMenu">
                    <img className="Menu" src={Menu} alt='menu'/>
                </div>
            </header>
            <div className="HomeInfoContainer">
                <div className="AlertButton">
                    <button type="submit" className="Alert">Alerta</button>
                </div>
                {/* <h3 className="Home">Ingresa nueva una nueva contraseña.</h3> */}
                {/* <form className="FormHome">
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
                    {/* <div className="ButtonHomeContainer">
                        <button className="ButtonHome">Enviar</button>
                    </div> 
                </form> */}
            </div>
        </div>
    </div>
)

export default Home;