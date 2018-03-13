import * as React from "react";
import ClientApp from "../../app1/src/ClientApp";
import Utils from "../../app1/src/Utils";

export default class App extends React.Component<{}, {}> {
  private client: ClientApp;

  constructor() {
    super();

    this.client = new ClientApp(new Utils());
  }

  public render() {
    return (
      <div className="app">
        <div>React App {this.client.getStuff()}</div>
      </div>
    );
  }
}
