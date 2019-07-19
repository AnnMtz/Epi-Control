import React, { Component } from 'react';
import './ScheduleAppointment.scss';
import Header from '../Header';

class ScheduleAppointment extends Component{

    constructor(props) {
        super(props);
        this.clickSave = this.clickSave.bind(this);

        this.state={
            medicalAppointmentDay:'',
            appointmentTime:''
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

    clickSave = () => {
        console.log('ya entramos');
    this.props.history.push("/ScheduleAppointment")
}

render() {
    let {medicalAppointmentDay,appointmentTime}=this.setState;

    return(
        <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
            <Header></Header>
            <div className="PersonalInformationInfoContainer">
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