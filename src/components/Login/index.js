import React, {Component} from 'react';
import Logo from '../../Assets/img/logo.png';
import './Login.scss';
import Home from '../Home';
import { Link } from 'react-router-dom';

class Login extends Component{

    constructor (props) {
        super(props);
        this.state = {
            emailPacient:'',
            passwordPacient:''
        }
        this.onChange = this.onChange.bind(this);

        this.clickLogin = this.clickLogin.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState = {
            [target.name]: target.value
        }
    }
    
    clickLogin = () => {
            console.log('ya entramos');
        this.props.history.push("/Home")
    }

    render(){
        let{emailPacient,passwordPacient}=this.setState;
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
                        <div className="InputContainer">
                            <label className="UserLabel" htmlFor="user">Usuario</label>
                            <input className="InputLogin" type="text" id="user" name="emailPacient" value={emailPacient} onChange={this.onChange}/>
                        </div>
                        <div className="InputContainer">
                            <label className="UserLabel" htmlFor="password">Contraseña</label>
                            <input className="InputLogin" type="password" id="password" name="passwordPacient" value={passwordPacient} onChange={this.onChange}/>
                        </div>
                        <Link to ="/Recovery" className="LinkPassword">¿Olvidaste tu contraseña?</Link>
                        <Link to ="/Register" className="LinkRegister">Registrate</Link>
                        <button className="BtnLogin" type="button" onClick={this.clickLogin}>Enviar</button>
                    </div>
                    </div>
            </div>
        )
    }
} 


export default Login;