export default class Inputs {
    constructor(inputfield, languagelist, config = {}) {
        this.inputfield = inputfield;
        this.languagelist = languagelist;
        this.config = {
            showSuggestions: () => {
                return true
            },
            visibleSuggestionCount: 8,
            ...config,
        }
        this.inputfield.addEventListener("keyup", this.autoSuggestOnInput.bind(this));
        this.selectAndPasteInput();
    }

    autoSuggestOnInput() {
        const suggestmatch = [];
        const itemname = this.languagelist.name;
        if (this.config.showSuggestions() == true) {
            this.deletePreviousContainer();
            this.initializeSuggestContainer();
            this.deletePreviousInput();
            this.hideEmptyInput();
            //Find matching phrases and save them into a new Array
            for (var i = 0; i < itemname.length && i <= this.config.visibleSuggestionCount; i++) {
                if (itemname[i].includes(this.inputfield.value) == true) {
                    suggestmatch.push(itemname[i]);
                }
            }
            //create new div(s) and fill them with the suggestion name(s) 
            for (var i = 0; i < suggestmatch.length; i++) {
                const suggestitem = document.createElement("div")
                suggestitem.className = "suggest-field";
                suggestitem.innerHTML = suggestmatch[i]
                this.suggestioncontainer.appendChild(suggestitem);
            }
        }
    }

    deletePreviousContainer() {
        if (this.inputfield.parentNode.querySelectorAll(".suggestcontainer").length >= 1) {0
            this.inputfield.parentNode.removeChild(this.inputfield.parentNode.lastChild);
        }
    }

    initializeSuggestContainer() {
        this.suggestioncontainer = document.createElement("div");
        this.suggestioncontainer.className = "suggestcontainer";
        this.inputfield.parentNode.appendChild(this.suggestioncontainer);
    }

    deletePreviousInput() {
        while (this.suggestioncontainer.firstChild) {
            this.suggestioncontainer.removeChild(this.suggestioncontainer.firstChild);
        }
    }

    hideEmptyInput() {
        if (this.inputfield.value == 0) {
            this.suggestioncontainer.classList.add("d-none");
        } else {
            this.suggestioncontainer.classList.remove("d-none");
        }
    }

    //ToDO
    // selectAndPasteInput() {
    //     currentsuggestfield = this.inputfield.parentNode.lastChild.querySelectorAll(".suggest-field");
    //     console.log(currentsuggestfield);
    //     for (var i=0; i < currentsuggestfield.length; i++) {
    //         console.log(currentsuggestfield.innerHTML);
    //     }
    // }
}