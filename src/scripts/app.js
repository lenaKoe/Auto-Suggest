import UIElements, {} from "./UIManager.js"
import Inputs from "./Inputs.js";

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



var inputlanguage = new Inputs(UIElements.languages, languagelist, "Sprachen");
inputlanguage.autoSuggestOnInput();
inputlanguage.deletePreviousInput();

var inputcountry = new Inputs(UIElements.europeancountries, europeancountrylist, "Europäische Länder");
inputcountry.autoSuggestOnInput();
inputcountry.deletePreviousInput(); 