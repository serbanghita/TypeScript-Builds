import {Utils} from "../common/Utils";

export class Client {
    constructor(protected utils: Utils) {

    }

    private isNode(): boolean {
        return (typeof document === "undefined");
    }

    public hello() {
        let msg = `Hello there! Random: ${this.utils.randomInt(0, 100)}`;
        if (this.isNode()) {
            console.log(msg);
        } else {
            window.onload = () => {
                document.body.innerHTML = msg;
            };
        }
    }
}