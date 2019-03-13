import * as Redis from "ioredis";

describe("redis tests", () => {
  it("ping", async () => {
    const redis = new Redis();

    await redis.ping();
  });
});
