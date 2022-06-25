import { Greeter } from "../src/Greeter";

describe("Greeter Class", () => {
  test("greeting with KJ", () => {
    //arrange

    let whatsUp: Greeter = new Greeter("What's up");

    //act
    // greeting = greeting && name;
    //assertion
    expect(whatsUp.greet("KJ")).toBe("What's up, KJ!");
  });

  test("greeting with Chicken Butt", () => {
    //arrange

    let whatsUp: Greeter = new Greeter("What's up");

    //act
    // greeting = greeting && name;
    //assertion
    expect(whatsUp.greet("Chicken Butt")).toBe("What's up, Chicken Butt!");
  });
});
