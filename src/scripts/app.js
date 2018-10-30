import UIElements, {} from "./UIManager.js"
import Inputs from "./inputs.js";

var languagelist = {
    "name": [
        "Mandarin",
        "Englisch",
        "Hindi",
        "Spanisch",
        "Arabisch",
        "Bengali",
        "Portugiesich",
        "Russisch",
        "Deutsch",
        "Japanisch",
        "Französisch",
        "Javanisch",
        "Vietnam-esisch",
        "Lahnda",
        "Koreanisch",
        "Telugu",
        "Italienisch",
        "Marathi",
        "Urdu"
    ]
}

var europeancountrylist = {
    "name": [
        "Albanien",
        "Andorra",
        "Belgien",
        "Bosnien und Herzegowina",
        "Bulgarien",
        "Dänemark",
        "Deutschland",
        "Estland",
        "Deutsch",
        "Finnland",
        "Frankreich",
        "Griechenland",
        "Irland	",
        "Island",
        "Italien",
        "Kasachstan",
        "Kosovo",
        "Kroatien",
        "Lettland",
        "Liechtenstein",
        "Litauen",
        "Luxemburg",
        "Malta",
        "Mazedonien",
        "Moldawien",
        "Monaco",
        "Montenegro",
        "Niederlande",
        "Norwegen",
        "Österreich",
        "Polen",
        "Portugal",
        "Rumänien",
        "Russland",
        "San Marino",
        "Schweden",
        "Schweiz",
        "Serbien",
        "Slowakei",
        "Slowenien",
        "Spanien",
        "Tschechien",
        "Türkei",
        "Ukraine",
        "Ungarn",
        "Vatikanstadt",
        "Vereinigtes Königreich",
        "Weißrussland",
    ]
}

var oceanlist = {
    "name": [
        "Atlantischer Ozean ",
        "Indischer Ozean",
        "Pazifischer Ozean",
        "Arktisches Mittelmeer",
        "Amerikanisches Mittelmeer",
        "Australasiatische Mittelmeer",
        "Europäische Mittelmeer",
    ]
}

var inputlanguage = new Inputs(UIElements.inputfields[0], languagelist);
var inputcountry = new Inputs(UIElements.inputfields[1], europeancountrylist);
var inputocean = new Inputs(UIElements.inputfields[2], oceanlist);