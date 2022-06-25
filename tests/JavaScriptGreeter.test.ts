import exp from "constants";
import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScript Greeter Class", () => {
  test("override with hi hiiii buddy", () => {
    //arrange
    let whatsUp: JavaScriptGreeter = new JavaScriptGreeter("Hi hiiiiiii");
    //assertation
    expect(whatsUp.greet("buddy")).toBe("console.log(Hi hiiiiiii, buddy)!");
  });

  test("override with hey biddy", () => {
    //arrange
    let whatsUp: JavaScriptGreeter = new JavaScriptGreeter("Hey");
    //assertation
    expect(whatsUp.greet("biddy")).toBe("console.log(Hey, biddy)!");
  });
});
