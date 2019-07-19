import React, {Component} from 'react';
import './Home.scss';
import Header from '../Header';
import Consult from "../../Assets/img/consult.jpg"
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Home extends Component {
    constructor(props) {
        super(props)

        // this.mostrarPosicion = this.mostrarPosicion.bind(this);
        // this.mostrarErrores = this.mostrarErrores.bind(this);
        // this.detener = this.detener.bind(this);
    }
    
    //  mostrarPosicion(posicion) {
    //     var latitud = posicion.coords.latitude;
    //     var longitud = posicion.coords.longitude;
    //     var precision = posicion.coords.accuracy;
    
    //     var miPosicion = new google.maps.LatLng(latitud, longitud);
    
    //     // Se comprueba si el mapa se ha cargado ya 
    //     if (mapa == null) {
    //         // Crea el mapa y lo pone en el elemento del DOM con ID mapa
    //         var configuracion = {center: miPosicion, zoom: 16, mapTypeId: google.maps.MapTypeId.HYBRID};
    //         mapa = new google.maps.Map(document.getElementById("mapa"), configuracion);
    
    //         // Crea el marcador en la posicion actual
    //         mapaMarcador = new google.maps.Marker({position: miPosicion, title:"Esta es tu posición"});
    //         mapaMarcador.setMap(mapa);
    //     } else {
    //         // Centra el mapa en la posicion actual
    //         mapa.panTo(miPosicion);
    //         // Pone el marcador para indicar la posicion
    //         mapaMarcador.setPosition(miPosicion);
    //     }
    // }
    
    //  mostrarErrores(error) {
    //     switch (error.code) {
    //         case error.PERMISSION_DENIED:
    //             alert('Permiso denegado por el usuario'); 
    //             break;
    //         case error.POSITION_UNAVAILABLE:
    //             alert('Posición no disponible');
    //             break; 
    //         case error.TIMEOUT:
    //             alert('Tiempo de espera agotado');
    //             break;
    //         default:
    //             alert('Error de Geolocalización desconocido :' + error.code);
    //     }
    // }
    
    // var opciones = {
    //     enableHighAccuracy: true,
    //     timeout: 10000,
    //     maximumAge: 1000
    // };

    //  detener() {
    //     navigator.geolocation.clearWatch(watchId);
    // }

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