import React, {Component} from 'react';
import './Home.scss';
import Header from '../Header';
import Consult from "../../Assets/img/consult.jpg"
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Home extends Component {
    constructor(props) {
        super(props)
    }


render(){
    return(
        <div className ='MainContainer'>
        <div className ='ContainerHome'>
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