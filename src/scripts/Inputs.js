import UIElements, {} from "./UIManager.js"

export default class Inputs {
    constructor(suggestions, inputcontainer, languagelist) {
        this.suggestions = suggestions;
        this.inputcontainer = inputcontainer;
        this.languagelist = languagelist;
        this.inputcontainer.addEventListener("input", this.autoSuggestOnInput.bind(this)); //Keyup funktionier mit der delete Fkt nicht -> z.B. leere Zeile bei einem Treffer
        this.inputcontainer.addEventListener("keydown", this.deletePreviousInput.bind(this));
    }

    autoSuggestOnInput() {
        const suggest = [];
        const suggestfield = UIElements.suggestfield;
        const name = this.languagelist.name;
        const value = this.inputcontainer.value;
        
        //Find matching phrases and save them into a new Array
        for (var i = 0; i < name.length; i++) {
            if (name[i].includes(value) == true) {
                suggest.push(name[i]);
            }
        }
        //create new div(s) and insert the suggestion name(s)
        for (var i = 0; i < suggest.length; i++) {
            const field = document.createElement("div");
            field.className = "suggest-field";
            var parent = this.suggestions;
            parent.appendChild(field);
            suggestfield[i].innerHTML = suggest[i];
        }
    }

    deletePreviousInput() {
        const element = this.suggestions;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}