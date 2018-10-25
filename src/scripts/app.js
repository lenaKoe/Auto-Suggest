import UIElements, {
    UIManager
} from "./UIManager.js"

var input = UIElements.input,
    suggestfield = UIElements.suggestfield,
    languagelist = {
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
    },
    name = languagelist.name;

input.oninput = function () {
    var count = 0;
    var suggest = new Array(count);
    //Find matching phrases and save them into a new Array
    for (var i = 0; i < name.length; i++) {
        if (name[i].includes(input.value) == true) {
            suggest[count] = name[i];
            count++;
        }
    }
    //show suggestions
    for (var i = 0; i < suggest.length; i++) {
        var field = document.createElement("div");
        field.className = "suggest-field";
        var container = UIElements.suggestcontainer;
        container.appendChild(field);
        suggestfield[i].innerHTML = suggest[i];
    }

    //Delete previous divs / suggestions
    input.onkeydown = function () {
        var element = UIElements.suggestcontainer;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}