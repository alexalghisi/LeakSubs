import { create } from "zustand";
import { DECK, type Sub } from "@/lib/burn";

interface BurnState {
  subs: Sub[];
  cancel: (id: string) => void;
  reset: () => void;
}

export const useBurnStore = create<BurnState>((set) => ({
  subs: DECK,
  cancel: (id) =>
    set((state) => ({
      subs: state.subs.map((sub) => (sub.id === id ? { ...sub, cancelled: true } : sub)),
    })),
  reset: () => set({ subs: DECK }),
}));
