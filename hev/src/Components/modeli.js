import React from "react";
import { Link } from "react-router-dom";
import Svojstva from "./modeliklasa";

function Modeli() {
    return (
        <div id="content">
            <center>
                <nav id="navbar">
                    <div id="naslov"> {/*Header*/}
                        <h1>H.E.V.</h1>
                        <span id="podnaslov">Odjelo za svaku priliku</span>
                    </div>
                    <Link class="nav-link" id="poc" to="/" >POČETNA</Link>
                    <Link class="nav-link" id="mod" to="/modeli" style={{ textDecoration: "underline" }}>MODELI</Link>
                    <Link class="nav-link" id="suc" to="/sucelje">SUČELJE</Link>
                    <Link class="nav-link" id="kon" to="/kontakt" >KONTAKT</Link>
                    <Link to="/" ><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Black_Mesa_logo.svg/1200px-Black_Mesa_logo.svg.png" /></Link>
                </nav>
                <div id="main">
                    <br />
                    <table id="marke">
                        <tr>
                            <td id="tekstIV">
                                <h4>MK IV</h4>
                                <p>Stariji model sa standardnim <br /> sučeljem  bez dodataka</p>
                                <br />
                                <p class="spec" id="cetri">
                                    Težina = <b>{Svojstva.markaIV().tezina}</b>
                                    <br />
                                    Potrošnja = <b>{Svojstva.markaIV().energija}</b>
                                    <br />
                                    Cijena = <b style={{ color: "rgb(29, 142, 29)" }} >{Svojstva.markaIV().cijena}</b>
                                </p>
                            </td>
                            <td id="IV"></td>
                        </tr>
                        <br />
                        <hr id="tabHR" />
                        <br />
                        <tr>
                            <td id="V"></td>
                            <td id="tekstV">
                                <h4>MK V</h4>
                                <p>Novi model sa razvijenim sučeljem, <br /> uključujući novu "zoom" funkciju.</p>
                                <p class="spec" id="pet">
                                    Težina = <b>{Svojstva.markaV().tezina}</b>
                                    <br />
                                    Potrošnja = <b>{Svojstva.markaV().energija}</b>
                                    <br />
                                    Cijena = <b style={{ color: "rgb(29, 142, 29)" }} >{Svojstva.markaV().cijena}</b>
                                </p>
                            </td>

                        </tr>
                    </table>
                    <br />
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

export default Modeli;