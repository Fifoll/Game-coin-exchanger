"use strict";
class Exchanger {
    constructor(gold, silver, copper) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
    exchange() {
        const goldNum = (this.gold * 10) * 5;
        const silverNum = this.silver * 5;
        return goldNum + silverNum + this.copper;
    }
}
const app = () => {
    const form = document.querySelector('#exchanger');
    const result = document.querySelector('#result');
    if (form !== null) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (result !== null) {
                const goldVaule = getInputVaule("gold");
                const silverVaule = getInputVaule("silver");
                const copperVaule = getInputVaule("copper");
                const exchanger = new Exchanger(goldVaule, silverVaule, copperVaule);
                result.innerText = exchanger.exchange().toString();
            }
        });
    }
    const getInputVaule = (id) => {
        const inputElement = document.querySelector(`#${id}`);
        if (inputElement !== null) {
            return parseInt(inputElement.value);
        }
        else {
            throw new Error("Element nie jest inputem!");
        }
    };
};
app();
