import EmailQueueService from "../EmailQueueService";

  it("should be a function", () => {
    expect(typeof EmailQueueService).toBe("function");
  });
  it("should be a function", () => {
    const emailQueueServiceObj = new EmailQueueService();
    expect(typeof emailQueueServiceObj.enqueue).toBe("function");
    expect(typeof emailQueueServiceObj.dequeue).toBe("function");
    expect(typeof emailQueueServiceObj.isEmpty).toBe("function");
    expect(typeof emailQueueServiceObj.size).toBe("function");
    expect(typeof emailQueueServiceObj.clear).toBe("function");
  });

  it("should be able to push", () => {
    const emailQueueServiceObj = new EmailQueueService();
    emailQueueServiceObj.enqueue(1);
    expect(emailQueueServiceObj.size()).toBe(1);
  });

  it("should shift the first item", () => {
    const emailQueueServiceObj = new EmailQueueService();
    emailQueueServiceObj.enqueue(10);
    emailQueueServiceObj.enqueue(1);
    expect(emailQueueServiceObj.dequeue()).toBe(10);
  });

  it("should return undefined if queue is empty", () => {
    const emailQueueServiceObj = new EmailQueueService();
    expect(emailQueueServiceObj.dequeue()).toBe(undefined);
  });

  it("should clear the queue", () => {
    const emailQueueServiceObj = new EmailQueueService();
    emailQueueServiceObj.enqueue(10);
    emailQueueServiceObj.enqueue(1);
    emailQueueServiceObj.clear();
    expect(emailQueueServiceObj.size()).toBe(0);
  });
});
