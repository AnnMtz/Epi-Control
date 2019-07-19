import React, {Component} from 'react';
import './Home.scss';
import Header from '../Header';
import Consult from "../../Assets/img/consult.jpg"

class Home extends Component {
    constructor(props) {
        super(props)

        // this.mostrarPosicion = this.mostrarPosicion.bind(this);

        // this.mostrarErrores = this.mostrarErrores.bind(this);

        // this.detener = this.detener.bind(this);
    } 
render(){
    return(
        <div className ='MainContainer'>
        <div className ='ContainerHome'>
<<<<<<< HEAD
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
=======
            <Header></Header>
            <div className="PrincipalInfoContainer">
                <div className="TipsContainer">
                    <span id="TitleTips">TIPS</span>
                    <div id="InfoTipsContainer">
                        <div className="ImageContainer">
                            <img id="ImageDoctor" alt="Imagen de tips" src={Consult}/>
                        </div>
                        <p id="InfoParagraphContaier">
                            Intenta ignorar las reacciones negativas de la gente. 
                            Es útil aprender sobre la epilepsia para que sepas cuál es la 
                            información verdadera, en lugar de tener ideas equivocadas 
                            sobre la enfermedad. Y trata de mantener tu sentido del humor.
                        </p>
>>>>>>> 11c06a5381d5f615d9a1132ec0d8ca28b806061d
                    </div>
                </div>        
                <div className="HomeInfoContainer">
                    <div className="AlertButton">
                        <button type="submit" className="Alert">Alerta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
}



export default Home;