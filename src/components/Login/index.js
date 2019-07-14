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
                                <div className="col-sm-6 LoginMain">
                                <h1 className="LoginTitle">¡BIENVENID@!</h1>
                                    <div className="logo">
                                        <img src={Logo} alt="logo"/>
                                    </div>
                                    <p>Tu mejor compañia en el seguimiento de tu epilepsía</p>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="LoginTitle">Iniciar Sesión</h1>
                                    <label className="UserLabel" htmlFor="user">Usuario</label>
                                    <input className="InputLogin" type="text" placeholder="Usuario" id="user"/>
                                    <label className="UserLabel" htmlFor="password">Contraseña</label>
                                    <input className="InputLogin" type="password" placeholder="Contraseña" id="password"/>
                                    <a className="LinkPassword" href="#">¿Olvidaste tu contraseña</a>
                                    <button className="BtnLogin" type="button" onClick={this.clickLogin}>Enviar</button>
                                </div>
                    </div>
            </div>
        )
    }
} 


export default Login;