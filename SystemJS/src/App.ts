import Utils from "./Utils";

export default class App {
    constructor(protected utils: Utils) {

    }

    public hello() {
      let msg = `Hello there! Random: ${this.utils.randomInt(0, 100)}`;
      this.utils.ready(() => {
        document.body.innerHTML = msg;
      });
    }
}
