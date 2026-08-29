import { DECK, activeBurn, saved, worstFirst, yearly } from "./burn";

test("yearly is twelve months, no 'first month free' fiction", () => {
  expect(yearly(110)).toBe(1_320);
});

test("Adobe plus the gym dominate the deck", () => {
  expect(worstFirst(DECK)[0]?.id).toBe("gym");
  expect(worstFirst(DECK)[1]?.id).toBe("adobe");
  expect(activeBurn(DECK)).toBe(yearly(45 + 40 + 63 + 110 + 180 + 25));
});

test("cancelling the gym is a year of rent on a parking spot", () => {
  const after = DECK.map((sub) => (sub.id === "gym" ? { ...sub, cancelled: true } : sub));
  expect(saved(after)).toBe(2_160);
  expect(activeBurn(after)).toBe(activeBurn(DECK) - 2_160);
});
