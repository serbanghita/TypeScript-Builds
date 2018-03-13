import Utils from "./Utils";

export default class App {
    constructor(protected utils: Utils) {

    }

    public hello() {
      console.log(`Hello there! Random: ${this.utils.randomInt(0, 100)}`);
    }
}
