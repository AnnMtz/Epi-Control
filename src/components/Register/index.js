import React, { Component } from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import '../Register/Register.scss'
// import './Register.scss';

<<<<<<< HEAD
class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            namePacient:'',
            lastnamePacient:'',
            emailPacient:'',
            passwordPacient:''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState = {
            [target.name]: target.value
        }
    }
    
    // function onSubmit(event) {
    //     event.preventDefault();
    //     props.onSubmit(state);
    // }

    render(){
        let{namePacient,lastnamePacient,emailPacient,passwordPacient}=this.setState;

        return (
            <div className='MainContainerRegister'>
            <div className="ContainerRegister">
                <div className="RegisterMain">
                    <h1 className="RegisterTitle">Lepsi</h1>
                    <h3 className="RegisterSubtitle">¿Sabías que?</h3>
                    <p className="RegisterParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
                </div>
                <div className="col-sm-6">
                    <h1 className="WelcomeTitle">Registrate</h1>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="name">Nombre</label>
                        <input className="InputRegister" type="text" id="name" name="namePacient" value={namePacient} onChange={this.onChange} />
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="lastname">Apellidos</label>
                        <input className="InputRegister" type="text" id="lastname" name="lastnamePacient" value={lastnamePacient} onChange={this.onChange}/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="email">Contraseña</label>
                        <input className="InputRegister" type="text" id="email" name="emailPacient" value={emailPacient} onChange={this.onChange}/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password">Contraseña</label>
                        <input className="InputRegister" type="password" id="password" name="passwordPacient" value={passwordPacient} onChange={this.onChange}/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                        <input className="InputRegister" type="password" id="password" name="passwordPacient" value={passwordPacient} onChange={this.onChange}/>
                    </div>
                    <button className="BtnRegister" type="button">Enviar</button>
                </div>
            </div>
        </div>
        )
    }
} 
=======
const Register = () => (
    <div className = 'MainContainerRegister'>
        <div className ="ContainerRegister">
            <div className="RegisterMain">
            <h1 className="RegisterTitle font-tangerine">Lepsi</h1>
                <h3 className="RegisterSubtitle">¿Sabías que?</h3>
                <p className="RegisterParagraph">Tener convulsiones en momentos determinados puede llevar a circunstancias peligrosas para ti o para otras personas.</p>
            </div>
            <div className="col-sm-6">
                <h1 className="WelcomeTitle">Registrate</h1>
                <div className="InputContainer">
                    <label className="UserLabel" htmlFor="name">Nombre</label>
                    <input className="InputRegister" type="text" id="name"/>
                </div>
                <div className="InputContainer">
                    <label className="UserLabel" htmlFor="lastname">Apellidos</label>
                    <input className="InputRegister" type="password" id="lastname"/>
                </div>
                <div className="InputContainer">
                    <label className="UserLabel" htmlFor="password">Contraseña</label>
                    <input className="InputRegister" type="password" id="password"/>
                </div>
                <div className="InputContainer">
                    <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                    <input className="InputRegister" type="password" id="password"/>
                </div>
                <button className="BtnRegister" type="button">Enviar</button>
            </div>
        </div>
    </div>
)
>>>>>>> 11c06a5381d5f615d9a1132ec0d8ca28b806061d

export default Register;