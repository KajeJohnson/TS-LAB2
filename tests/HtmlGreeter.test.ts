import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter Class", () => {
  test("h1 tag ", () => {
    //arrange

    let whatsUp: HtmlGreeter = new HtmlGreeter("Hi hiiiiii");

    //assertation
    expect(whatsUp.greet("buddy")).toBe("<h1>Hi hiiiiii, buddy!</h1>");
    console.log(whatsUp.greet("buddy"));
  });

  test("h4 tag ", () => {
    //arrange
    let tagName = "h4";
    let whatsUp: HtmlGreeter = new HtmlGreeter("Hi hiiiiii", tagName);

    //assertation
    expect(whatsUp.greet("buddy")).toBe("<h4>Hi hiiiiii, buddy!</h4>");
    // console.log(whatsUp.greet("buddy"));
    console.log(whatsUp.tagName);
  });
});
