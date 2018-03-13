import Utils from "./Utils";

export default class ClientApp {
  constructor(private util: Utils) {
    this.util = util;
  }

  public getStuff() {
    return this.util.randomInt(0, 1000);
  }
}
