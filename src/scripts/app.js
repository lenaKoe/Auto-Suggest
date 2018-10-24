import UIElements, {
    UIManager
} from "./UIManager.js"

var input = UIElements.input,
    suggestfield = UIElements.suggestfield;

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

var name = languagelist.name;

input.oninput = function () {
    var count = 0;
    var suggest = new Array(count);
    for (var i = 0; i < name.length; i++) {
        if (name[i].includes(input.value) == true) {
            suggest[count]=name[i];
            count++;
        }
    }
    for (var i = 0; i < suggest.length; i++) {
        var field = document.createElement("div");
        field.className = "suggest-field";
        var container = UIElements.suggestcontainer;
        container.appendChild(field);
        suggestfield[i].innerHTML = suggest[i];
    }

    input.onkeydown = function () {
        console.log("change");
        var element = UIElements.suggestcontainer;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}


