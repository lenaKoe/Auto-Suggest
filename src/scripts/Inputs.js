export default class Inputs {
    constructor(inputcontainer, languagelist, config = {}) {
        this.inputcontainer = inputcontainer;
        this.languagelist = languagelist;
        this.config = {
            showSuggestions: () => {
                return true
            },
            visibleSuggestionCount: 8,
            ...config,
        }
        this.inputcontainer.addEventListener("keyup", this.autoSuggestOnInput.bind(this));
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
                if (itemname[i].includes(this.inputcontainer.value) == true) {
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
        if (this.inputcontainer.parentNode.querySelectorAll(".suggestcontainer").length >= 1) {
            this.inputcontainer.parentNode.removeChild(this.inputcontainer.parentNode.lastChild);
        }
    }

    initializeSuggestContainer() {
        this.suggestioncontainer = document.createElement("div");
        this.suggestioncontainer.className = "suggestcontainer";
        this.inputcontainer.parentNode.appendChild(this.suggestioncontainer);
    }


    deletePreviousInput() {
        while (this.suggestioncontainer.firstChild) {
            this.suggestioncontainer.removeChild(this.suggestioncontainer.firstChild);
        }
    }

    hideEmptyInput() {
        if (this.inputcontainer.value == 0) {
            this.suggestioncontainer.classList.add("d-none");
        } else {
            this.suggestioncontainer.classList.remove("d-none");
        }
    }
}