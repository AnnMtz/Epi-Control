import React, { Component } from 'react';
import './CrisisRecord.scss';
import Header from '../Header'

class CrisisRecord extends Component{
    constructor(props){
        super(props)
        this.clickSave = this.clickSave.bind(this);

        this.state={
            crisisDay:'',
            timeCrisis:'',
            durationCrisis:'',
            typeCrisis:''
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
    let {crisisDay,timeCrisis,durationCrisis,typeCrisis}=this.setState;

    return(
        <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <Header></Header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Registra tus crisis aquí, lleva un control de
                    las mismas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Día</label>
                        <input className="InputLogin" type="text" id="user" name="crisisDay" value={crisisDay} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user" name="timeCrisis" value={timeCrisis} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Duración</label>
                        <input className="InputLogin" type="text" id="user" name="durationCrisis" value={durationCrisis} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Tipo</label>
                        <input className="InputLogin" type="text" id="user" name="typeCrisis" value={typeCrisis} onChange={this.onChange}/>
                    </div>
                </div>
                <button className="BtnPersonalInfo" type="button" onClick={this.clickSave}>Guardar</button>
                </div>
        </div>
    </div>
    )
}
}

export default CrisisRecord;