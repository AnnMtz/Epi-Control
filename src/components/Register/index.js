import React, { Component } from 'react';
import Logo from '../../Assets/img/logo.png';
import Return from '../../Assets/img/return.png';
import '../Register/Register.scss'
// import './Register.scss';

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
        this.submit = this.submit.bind(this);
    }

    onChange(event) {
        let target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    submit(event) {
        let{namePacient,lastnamePacient,emailPacient,passwordPacient}=this.state;

        let dataPacient = {
            namePacient:namePacient,
            lastnamePacient:lastnamePacient,
            emailPacient:emailPacient,
            passwordPacient:passwordPacient
        }
        
        var url = 'https://lepsi-backend.appspot.com/pacients';
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(dataPacient),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>{ 
            console.log('Success:', response)
            this.props.history.push("/Home")
        });
    }


    render(){
        let{namePacient,lastnamePacient,emailPacient,passwordPacient}=this.state;

        console.log("this.state")
        console.log(this.state)
        console.log("this.setState")
        console.log(this.setState)

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
                        <label className="UserLabel" htmlFor="email">Correo</label>
                        <input className="InputRegister" type="email" id="email" name="emailPacient" value={emailPacient} onChange={this.onChange}/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password">Contraseña</label>
                        <input className="InputRegister" type="password" id="passworduno" name="passwordPacient" value={passwordPacient} onChange={this.onChange}/>
                    </div>
                    <div className="InputContainer">
                        <label className="UserLabel" htmlFor="password2">Confirma tu contraseña</label>
                        <input className="InputRegister" type="password" id="passworddos" name="passwordPacient"/>
                    </div>
                    <button className="BtnRegister" type="submit" onClick={this.submit}>Enviar</button>
                </div>
            </div>
        </div>
        )
    }
} 

export default Register;