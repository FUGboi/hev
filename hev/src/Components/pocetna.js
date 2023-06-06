import React from "react";
import { Link } from "react-router-dom";

function Pocetna() {
    return (
        <div id="content">
            <center>
                <nav id="navbar">
                    <div id="naslov"> {/*Header*/}
                        <h1>H.E.V.</h1>
                        <span id="podnaslov">Odjelo za svaku priliku</span>
                    </div>
                    <Link class="nav-link" id="poc" to="/" style={{ textDecoration: "underline" }}>POČETNA</Link>
                    <Link class="nav-link" id="mod" to="/modeli">MODELI</Link>
                    <Link class="nav-link" id="suc" to="/sucelje">SUČELJE</Link>
                    <Link class="nav-link" id="kon" to="/kontakt">KONTAKT</Link>
                    <Link to="/" ><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Black_Mesa_logo.svg/1200px-Black_Mesa_logo.svg.png" /></Link>
                </nav>
                <div id="main">
                    <h2>Povoljna cijena i izuzetna kvaliteta</h2>
                    <hr />
                    <h3>Projektirano za vašu sigurnost</h3>
                    <br /><br />
                    <table>
                        <tr>
                            <td id="ljevi"><img id="radnik" src="https://steamuserimages-a.akamaihd.net/ugc/951846497515732886/66DC70972A62D47E8CEED293FA2BE4A6D8F471F4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" /></td>
                            <td id="desni">
                                <h4>Stručni oklop za stručne radnike</h4>
                                <p>Godine rada i testiranja od strane profesionalnih znanstvenika rezultiralo je u <i>jedno od najboljih kompleta oklopa
                                    ikad stavljeno na tržište</i>. <br /><br /> Napravljeno od <b> titanija, polietilena, kevlara i slojevitog olova</b>,
                                    ovaj oklop će zasigurno držati vas i vaše radnike sigurnima u brojnim hazardnim situacijama.
                                    <br /><br />
                                    Štiti od radijacije, tupe sile, večinu kiselina, pada, eksplozija i (dijelomično) na streljivo.
                                </p>
                            </td>
                        </tr>
                    </table>
                    <br /><br /><br />
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

export default Pocetna;