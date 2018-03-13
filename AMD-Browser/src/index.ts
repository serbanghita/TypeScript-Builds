import {Client} from "./client/Client";
import {Utils} from "./common/Utils";

let u = new Utils();
let c = new Client(u);
c.hello();
