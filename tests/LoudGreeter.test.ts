import { Greeter } from "../src/Greeter";
import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("calls without addVolume", () => {
    let whatsUp: LoudGreeter = new LoudGreeter("What's up");

    whatsUp.addVolume();

    expect(whatsUp.greet("KJ")).toBe("What's up, KJ!!!");
  });

  test("calls wits addVolumex2", () => {
    let whatsUp: LoudGreeter = new LoudGreeter("What's up");

    whatsUp.addVolume();
    whatsUp.addVolume();
    whatsUp.addVolume();

    expect(whatsUp.greet("KJ")).toBe("What's up, KJ!!!!!");
  });

  test("calls wits addVolumex5", () => {
    let whatsUp: LoudGreeter = new LoudGreeter("What's up");

    whatsUp.addVolume();
    whatsUp.addVolume();
    whatsUp.addVolume();
    whatsUp.addVolume();
    whatsUp.addVolume();
    whatsUp.addVolume();

    expect(whatsUp.greet("KJ")).toBe("What's up, KJ!!!!!!!!");
  });
});
