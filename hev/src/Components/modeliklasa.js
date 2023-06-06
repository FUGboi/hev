import React from "react";
import { Component } from "react";

export default class Svojstva {
    constructor(tezina, energija, cijena) {
        this.tezina = tezina;
        this.energija = energija;
        this.cijena = cijena;
    };

    static build(tezina, energija, cijena) {
        return new Svojstva(tezina, energija, cijena);
    };

    static markaIV() {
        return Svojstva.build("20 kg", "850 kWh", "20,000$")
    }

    static markaV() {
        return Svojstva.build("18.5 kg", "900 kWh", "25,000$")
    }
}
