import EventService from "../EventService";

describe("EventService", () => {
  it("should be a function", () => {
    expect(typeof EventService).toBe("function");
  });
  it("should have emit and on", () => {
    const eventServiceObj = new EventService();
    expect(typeof eventServiceObj.emit).toBe("function");
    expect(typeof eventServiceObj.on).toBe("function");
  });

  it("should listen and emit an event", () => {
    const eventServiceObj = new EventService();
    let test = 1;
    eventServiceObj.on("test", () => {
      test = 2;
    });
    eventServiceObj.emit("test", 1);
    expect(test).toBe(2);
  });
});
