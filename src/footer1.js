import React, { Component } from "react";
import './footer1.css';
import LogoPencilz from "./assets/Logo/PencilzLogoWhite.svg"

const Footer1 = () => {

    var mes;
    var th = "th";
    const fecha = new Date();
    //const fecha = new Date('Jul 31 2011');

    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth();
    switch (mesActual) {
        case 0:
            mes = "January";
            break;
        case 1:
            mes = "February";
            break;
        case 2:
            mes = "March";
            break;
        case 3:
            mes = "April";
            break;
        case 4:
            mes = "May";
            break;
        case 5:
            mes = "June";
            break;
        case 6:
            mes = "July";
            break;
        case 7:
            mes = "August";
            break;
        case 8:
            mes = "September";
            break;
        case 9:
            mes = "October";
            break;
        case 10:
            mes = "November";
            break;
        case 11:
            mes = "PROBANDO";
            break;
    }

    if(hoy == 1 || hoy == 21 || hoy == 31){
        th = "st";
    }else if(hoy == 2 || hoy == 22){
        th = "nd";
    }else if(hoy == 3 || hoy == 23){
        th = "rd";
    }

    return (
        <footer id="footer">
            <div className="center">
                <img src={LogoPencilz} alt="" />
                It's {mes} {hoy}{th}, {añoActual}. IT'S 10°C outside.
            </div>
        </footer>
    );
}
export default Footer1;