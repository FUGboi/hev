import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Kontakt extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const ime = formData.get('ime');
        const prezime = formData.get('prezime');
        const drzava = formData.get('drzava');
        const broj = formData.get('broj');
        const email = formData.get('email');

        alert(
            "Poslano!" + "\n" + "\n" +
            "Ime: " + ime + "\n" +
            "Prezime: " + prezime + "\n" +
            "Broj: " + drzava + " " + broj + "\n" +
            "Email: " + email + "\n")

        document.getElementById("forma").reset();
    }
    render() {
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
                        <Link class="nav-link" id="suc" to="/sucelje">SUČELJE</Link>
                        <Link class="nav-link" id="kon" to="/kontakt" style={{ textDecoration: "underline" }}>KONTAKT</Link>
                        <Link to="/" ><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Black_Mesa_logo.svg/1200px-Black_Mesa_logo.svg.png" /></Link>
                    </nav>
                    <div id="main">
                        <h2>Ako želite izvršiti kupnju, povrat novca, žalbu ili dr.
                            <br />
                            kontaktirajte nas!
                            <br /><br />
                        </h2>
                        <form id="forma" onSubmit={this.handleSubmit}>
                            <label> Ime: </label>
                            <input type="text" name="ime" size="15" id="Ime" /> <br /> <br />
                            <label> Prezime: </label>
                            <input type="text" name="prezime" size="15" id="Prezime" /> <br /> <br />


                            <input type="text" name="drzava" value="+385" size="2" id="Broj1" />
                            <input type="tel" name="broj" size="10" id="Broj2" /> <br /> <br />
                            Poruka
                            <br />
                            <textarea cols="80" rows="5">
                            </textarea>
                            <br /> <br />
                            Email:
                            <input type="email" name="email" placeholder="vaš.email@gmail.com" id="email" /> <br />
                            <br /> <br />
                            Password:
                            <input type="Password" name="lozinka" id="Lozinka" /> <br />
                            <br />
                            <input type="submit" value="Pošalji" id="Posalji" />
                        </form>
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
}


export default Kontakt;