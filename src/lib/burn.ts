export type Sub = {
  id: string;
  name: string;
  monthlyLei: number;
  cancelled: boolean;
};

export function yearly(monthlyLei: number): number {
  return monthlyLei * 12;
}

export function activeBurn(subs: Sub[]): number {
  return subs.filter((sub) => !sub.cancelled).reduce((sum, sub) => sum + yearly(sub.monthlyLei), 0);
}

export function saved(subs: Sub[]): number {
  return subs.filter((sub) => sub.cancelled).reduce((sum, sub) => sum + yearly(sub.monthlyLei), 0);
}

export function worstFirst(subs: Sub[]): Sub[] {
  return [...subs].sort(
    (a, b) => yearly(b.monthlyLei) - yearly(a.monthlyLei) || a.name.localeCompare(b.name),
  );
}

export const DECK: Sub[] = [
  { id: "icloud", name: "iCloud+ 2 TB", monthlyLei: 45, cancelled: false },
  { id: "spotify", name: "Spotify Family", monthlyLei: 40, cancelled: false },
  { id: "netflix", name: "Netflix Standard", monthlyLei: 63, cancelled: false },
  { id: "adobe", name: "Adobe CC", monthlyLei: 110, cancelled: false },
  { id: "gym", name: "World Class ghost membership", monthlyLei: 180, cancelled: false },
  { id: "news", name: "News site that you opened twice", monthlyLei: 25, cancelled: false },
];
