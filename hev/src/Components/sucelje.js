import React from "react";
import Video from "./bootup.mp4"
import { Link } from "react-router-dom";

function Sucelje() {
    return (
        <div id="content">
            <center>
                <nav id="navbar">
                    <div id="naslov"> {/*Header*/}
                        <h1>H.E.V.</h1>
                        <span id="podnaslov">Odjelo za svaku priliku</span>
                    </div>
                    <Link class="nav-link" id="poc" to="/" >POČETNA</Link>
                    <Link class="nav-link" id="mod" to="/modeli">MODELI</Link>
                    <Link class="nav-link" id="suc" to="/sucelje" style={{ textDecoration: "underline" }}>SUČELJE</Link>
                    <Link class="nav-link" id="kon" to="/kontakt">KONTAKT</Link>
                    <Link to="/" ><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Black_Mesa_logo.svg/1200px-Black_Mesa_logo.svg.png" /></Link>
                </nav>
                <div id="main">
                    <video autoPlay muted loop id="bootup">
                        <source src={Video} />
                    </video>
                    <p id="suceljeP">
                        H.E.V. odjela su opremljena brojnim senzorima koje prate statuse okoline
                        <br />i fizičko stanje korisnika.
                        <br /><br />
                        Te informacije se grafički prikazuju na ugrađenom <br /> sučelju u kacigi oklopa, a to uključuje:
                        <br />
                    </p>
                    <div id="lista">
                        <ul>
                            <li>Registar/baza podataka oružja i alata</li>
                            <li>Odabir izbornika</li>
                            <li>Kvantitet municija</li>
                            <li>Stanje vitalnosti</li>
                            <li>Stanje baterije</li>
                            <li>Razina radijacije</li>
                            <li>Razina kisika</li>
                            <li>Vanjska temperatura</li>
                        </ul>
                    </div>
                </div>
                <div id="footer">
                    <span id="ime">Marko Domuzin</span>, sva prava pridržana 2023.&copy;
                    <br />
                    Tel: +385 95 809 7045
                    <br />
                    Email: marko.domuzin@gmail.com
                </div>
            </center>
        </div>
    );
}

export default Sucelje;