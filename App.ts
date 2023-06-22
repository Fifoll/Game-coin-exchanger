class Exchanger {
    private gold: number;
    private silver: number;
    private copper: number;

    constructor(gold: number, silver: number, copper: number) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }

    exchange(): number {
        const goldNum = (this.gold * 10) * 5;
        const silverNum = this.silver * 5;
        return goldNum + silverNum + this.copper;
    }


}

const app = () => {

    const form: HTMLAnchorElement | null = document.querySelector('#exchanger');
    const result: HTMLAnchorElement | null = document.querySelector('#result');

    if (form !== null) {
        form.addEventListener<"submit">("submit", function (event): void {
            event.preventDefault();
            if (result !== null) {
                const goldVaule: number = getInputVaule("gold");
                const silverVaule: number = getInputVaule("silver");
                const copperVaule: number = getInputVaule("copper");
                const exchanger : Exchanger = new Exchanger(goldVaule, silverVaule, copperVaule);
                result.innerText = exchanger.exchange().toString();
            }
        })
    }


    const getInputVaule = (id: string): number => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${id}`);
        if (inputElement !== null) {
            return parseInt(inputElement.value);
        } else {
            throw new Error("Element nie jest inputem!");
        }
    }

}

app();


