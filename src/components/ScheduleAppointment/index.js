import React, { Component } from 'react';
import './ScheduleAppointment.scss';
import Header from '../Header';

class ScheduleAppointment extends Component{

    constructor(props) {
        super(props);

        this.state={
            medicalAppointmentDay:'',
            appointmentTime:''
        }
        this.onChange = this.onChange.bind(this);
        this.clickSave=this.clickSave.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState({
            [target.name]: value
        })
    }

    clickSave(){

        let {medicalAppointmentDay, appointmentTime}=this.state;

        let MedicalRegister = {
            medicalAppointmentDay:medicalAppointmentDay,
            appointmentTime:appointmentTime
        }
        
        console.log(MedicalRegister);

        var url = 'https://lepsi-backend.appspot.com/medicalschedule';
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(MedicalRegister),
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

render() {
    let {medicalAppointmentDay,appointmentTime}=this.state;

    return(
        <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
            <Header></Header>
            <div className="ScheduleAppointmentInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Agenda tus citas médicas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Fecha</label>
                        <input className="InputLogin" type="text" id="user" name="medicalAppointmentDay" value={medicalAppointmentDay} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user" name="appointmentTime" value={appointmentTime} onChange={this.onChange}/>
                    </div>
                </div>
                <button className="BtnPersonalInfo" type="button" onClick={this.clickSave}>Guardar</button>
                </div>
            </div>
        </div>
    )
}
} 

export default ScheduleAppointment;