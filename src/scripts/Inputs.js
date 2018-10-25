import UIElements, {} from "./UIManager.js"

export default class Inputs {
    constructor(container, languagelist, placeholder) {
        this.container = container;
        this.input = document.querySelector('.my-awesome-auto-suggest'); //Wie bekomme ich beide Container angesprochen?
        this.languagelist = languagelist;
        this.placeholder = placeholder;
        console.log(document.querySelectorAll('.my-awesome-auto-suggest')); 

        this.input.addEventListener("input", this.autoSuggestOnInput.bind(this)); //Keyup funktionier mit der delete Fkt nicht -> z.B. leere Zeile bei einem Treffer
        this.input.addEventListener("keydown", this.deletePreviousInput.bind(this));
    }

    autoSuggestOnInput() {
        const suggest = [];
        const suggestfield = UIElements.suggestfield;
        const name = this.languagelist.name;
        const value = this.input.value;
        

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
            console.log(this.container);
            var parent = this.container;
            parent.appendChild(field);
            suggestfield[i].innerHTML = suggest[i];
        }
    }

    deletePreviousInput() {
        const element = this.container;
         while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}