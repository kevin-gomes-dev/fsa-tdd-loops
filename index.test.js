import { describe, it, expect, vi, beforeAll, afterEach } from "vitest";
import {
  echo,
  echoWithSpace,
  sumTo,
  sumFromTo,
  countdown,
  sumOddsToN,
  getGrowthTime,
  getCompoundTime,
  moveWater,
  fizzbuzz,
} from "./index.js";

describe("echo", function () {
  it("returns repeated word for n > 1", function () {
    expect(echo("bird", 3)).toBe("birdbirdbird");
  });
  it("returns word itself for n = 1", function () {
    expect(echo("test", 1)).toBe("test");
  });
  it("returns empty string for n = 0", function () {
    expect(echo("x", 0)).toBe("");
  });
  it("returns empty string for empty word", function () {
    expect(echo("", 4)).toBe("");
  });
  it("returns empty string for n < 0", function () {
    expect(echo("a", -2)).toBe("");
  });
});

describe("echoWithSpace", function () {
  it("returns repeated word with spaces for n > 1", function () {
    expect(echoWithSpace("badger", 3)).toBe("badger badger badger");
  });
  it("returns word itself for n = 1", function () {
    expect(echoWithSpace("test", 1)).toBe("test");
  });
  it("returns empty string for n = 0", function () {
    expect(echoWithSpace("x", 0)).toBe("");
  });
  it("returns empty string for empty word", function () {
    expect(echoWithSpace("", 3)).toBe("");
  });
  it("returns empty string for n < 0", function () {
    expect(echoWithSpace("a", -2)).toBe("");
  });
});

describe("sumTo", function () {
  it("returns sum for n > 1", function () {
    expect(sumTo(5)).toBe(15);
  });
  it("returns 1 for n = 1", function () {
    expect(sumTo(1)).toBe(1);
  });
  it("returns 0 for n = 0", function () {
    expect(sumTo(0)).toBe(0);
  });
  it("returns 0 for n < 0", function () {
    expect(sumTo(-5)).toBe(0);
  });
});

describe("sumFromTo", function () {
  it("returns sum for a < z", function () {
    expect(sumFromTo(1, 3)).toBe(6);
  });
  it("returns a for a = z", function () {
    expect(sumFromTo(2, 2)).toBe(2);
  });
  it("returns 0 for a > z", function () {
    expect(sumFromTo(3, 1)).toBe(0);
  });
  it("returns sum if a < 0", function () {
    expect(sumFromTo(-2, 3)).toBe(3);
  });
});

describe("countdown", function () {
  // We're using some new techniques here to make sure that you're using
  // console.log correctly.
  // Don't worry about understanding this yet!
  let spy;
  beforeAll(function () {
    spy = vi.spyOn(console, "log");
  });
  afterEach(function () {
    spy.mockClear();
  });

  it("logs numbers from n down to 1", function () {
    countdown(3);

    // This means we expect console.log to have been called with
    // 3, then 2, then 1
    expect(spy.mock.calls.flat()).toEqual([3, 2, 1]);
  });
  it("logs only 1 for n = 1", function () {
    countdown(1);
    expect(spy.mock.calls).toEqual([[1]]);
  });
  it("logs nothing for n = 0", function () {
    countdown(0);
    expect(spy.mock.calls).toEqual([]);
  });
  it("logs nothing for n < 0", function () {
    countdown(-5);
    expect(spy.mock.calls).toEqual([]);
  });
});

describe("sumOddsToN", function () {
  it("returns sum of odds for n > 1", function () {
    expect(sumOddsToN(5)).toBe(9);
  });
  it("returns sum of odds for even n > 1", function () {
    expect(sumOddsToN(10)).toBe(25);
  });
  it("returns 1 for n = 1", function () {
    expect(sumOddsToN(1)).toBe(1);
  });
  it("returns 0 for n = 0", function () {
    expect(sumOddsToN(0)).toBe(0);
  });
  it("returns 0 for n < 0", function () {
    expect(sumOddsToN(-3)).toBe(0);
  });
});

describe("getGrowthTime", function () {
  it("returns undefined if start <= 0", function () {
    expect(getGrowthTime(0, 10)).toBeUndefined();
    expect(getGrowthTime(-5, 10)).toBeUndefined();
  });
  it("returns correct time for doubling to reach target", function () {
    expect(getGrowthTime(1, 8)).toBe(60);
  });
  it("returns 0 if start = target", function () {
    expect(getGrowthTime(10, 10)).toBe(0);
  });
  it("returns 0 if start > target", function () {
    expect(getGrowthTime(100, 50)).toBe(0);
  });
  it("returns correct time if start < target", function () {
    expect(getGrowthTime(5, 78)).toBe(80);
  });
});

describe("getCompoundTime", function () {
  it("returns undefined if start <= 0", function () {
    expect(getCompoundTime(0, 0.1, 100)).toBeUndefined();
    expect(getCompoundTime(-100, 0.1, 100)).toBeUndefined();
  });
  it("returns undefined if rate <= 0", function () {
    expect(getCompoundTime(100, 0, 100)).toBeUndefined();
    expect(getCompoundTime(100, -0.5, 100)).toBeUndefined();
  });
  it("returns correct years for compound growth", function () {
    expect(getCompoundTime(100, 0.1, 200)).toBe(8);
  });
  it("returns 0 if start = target", function () {
    expect(getCompoundTime(100, 0.1, 100)).toBe(0);
  });
  it("returns 0 if start > target", function () {
    expect(getCompoundTime(100, 0.1, 50)).toBe(0);
  });
  it("returns correct years for larger values", function () {
    expect(getCompoundTime(2000, 0.05, 5000)).toBe(19);
  });
});

describe("moveWater", function () {
  it("returns undefined if colander <= 0", () => {
    expect(moveWater(0, 10)).toBeUndefined();
    expect(moveWater(-3, 10)).toBeUndefined();
  });
  it("returns 0 if bucket <= 0", () => {
    expect(moveWater(5, 0)).toBe(0);
    expect(moveWater(5, -2)).toBe(0);
  });
  it("returns 1 if colander >= bucket", () => {
    expect(moveWater(5, 5)).toBe(1);
    expect(moveWater(7, 3)).toBe(1);
  });
  it("returns bucket if colander = 1", () => {
    expect(moveWater(1, 987654321)).toBe(987654321);
  });
  it("returns correct trips", () => {
    expect(moveWater(5, 18)).toBe(8);
    expect(moveWater(5, 11)).toBe(3);
    expect(moveWater(3, 6)).toBe(3);
  });
});

describe("fizzbuzz", function () {
  let spy;
  beforeAll(function () {
    spy = vi.spyOn(console, "log");
  });
  afterEach(function () {
    spy.mockClear();
  });

  it("logs correct fizzbuzz sequence for n = 6", function () {
    fizzbuzz(6);
    expect(spy.mock.calls.flat()).toEqual([1, 2, "fizz", 4, "buzz", "fizz"]);
  });
  it("logs correct fizzbuzz sequence for n = 3", function () {
    fizzbuzz(3);
    expect(spy.mock.calls.flat()).toEqual([1, 2, "fizz"]);
  });
  it("logs correct fizzbuzz sequence for n = 15", function () {
    fizzbuzz(15);
    expect(spy.mock.calls.flat()).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
  it("logs nothing for n = 0", function () {
    fizzbuzz(0);
    expect(spy.mock.calls).toEqual([]);
  });
  it("logs nothing for n < 0", function () {
    fizzbuzz(-5);
    expect(spy.mock.calls).toEqual([]);
  });
});
