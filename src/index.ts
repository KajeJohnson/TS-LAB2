import "./Greeter";
import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";

let greeter: Greeter = new Greeter("Hello, Everyone!");

console.log(greeter.greeting);
