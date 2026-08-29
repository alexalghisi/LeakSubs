import { DECK } from "@/lib/burn";
import { useBurnStore } from "./burnStore";

test("cancelling Adobe marks it cancelled", () => {
  useBurnStore.setState({ subs: DECK });
  useBurnStore.getState().cancel("adobe");
  expect(useBurnStore.getState().subs.find((sub) => sub.id === "adobe")?.cancelled).toBe(true);
  useBurnStore.getState().reset();
});
