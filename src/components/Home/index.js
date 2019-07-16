import React from 'react';
import './Home.scss';

const Home = () => (
    <div className ='MainContainer'>
        <div className ='ContainerHome'>
            <header>
                <nav className="Menu">
                    <div class="Logo">
                            <h1>Lepsi</h1>
                            <a href="#" class="Btn-menu" id="btn-menu"><img id="btnMenu" src="img/menu.png" alt=""/></a>
                    </div>
                    <div className="Enlaces" id="enlaces">
                        <a href="#">Información personal</a>
                        <a href="#">Registro médico</a>
                        <a href="#">Historial de crisis</a>
                    </div>
                </nav>
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