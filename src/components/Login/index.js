import React,{Component} from 'react';
import Logo from '../../Assets/img/logo.png';
import './Login.scss';

class Login extends Component{

    constructor (props) {
        super(props);
        this.clickLogin = this.clickLogin.bind(this);
    };
    
    clickLogin = () => {
        console.log('ya entramos');
        
    }
    render(){
        return(
            <div className ="MainContainer">
                <div className ="ContainerLogin">
                                <div className="LoginMain">
                                <h1 className="LoginTitle">Lepsi</h1>
                                    <h3 className="LoginSubtitle">¿Sabías que?</h3>
                                    <p className="LoginParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="WelcomeTitle">¡BIENVENIDO!</h1>
                                    <h3 className="WelcomeSubtitle">Iniciar Sesión</h3>
                                    <label className="UserLabel" htmlFor="user">Usuario</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                    <label className="UserLabel" htmlFor="password">Contraseña</label>
                                    <input className="InputLogin" type="password" id="password"/>
                                    <a className="LinkPassword" href="#">¿Olvidaste tu contraseña?</a>
                                    <a className="LinkRegister" href="">Registrate</a>
                                    <button className="BtnLogin" type="button" onClick={this.clickLogin}>Enviar</button>
                                </div>
                    </div>
            </div>
        )
    }
} 


export default Login;