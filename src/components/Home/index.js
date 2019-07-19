import React, {Component} from 'react';
import './Home.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

        this.mostrarPosicion = this.mostrarPosicion.bind(this);

        this.mostrarErrores = this.mostrarErrores.bind(this);

        this.detener = this.detener.bind(bind);
    }
        
} 
render(){
    
}
(
    <div className ='MainContainer'>
        <div className ='ContainerHome'>
        <Header></Header>
            <div className="HomeInfoContainer">
                <div className="AlertButton">
                    <button type="submit" className="Alert" onClick="detener()">Alerta</button>
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