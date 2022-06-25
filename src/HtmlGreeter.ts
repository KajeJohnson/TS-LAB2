import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
  tagName = "";
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }

  greet(name: string) {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}

// let hello: HtmlGreeter = new HtmlGreeter("hello", "<h1>");
// console.log(hello.greet("Cat"));
// //
