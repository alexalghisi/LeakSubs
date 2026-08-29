import { Button } from "@/components/ui/button";
import { activeBurn, saved, worstFirst, yearly } from "@/lib/burn";
import { useBurnStore } from "@/store/burnStore";

export function BurnPane() {
  const subs = useBurnStore((state) => state.subs);
  const cancel = useBurnStore((state) => state.cancel);
  const ranked = worstFirst(subs);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex gap-8 border-b border-border px-5 py-4">
        <div>
          <p className="text-[12px] text-muted-foreground">Still leaking / year</p>
          <p className="text-[28px] font-semibold tabular-nums tracking-tight" data-testid="burn">
            {String(activeBurn(subs))} lei
          </p>
        </div>
        <div>
          <p className="text-[12px] text-muted-foreground">Saved / year</p>
          <p className="text-[28px] font-semibold tabular-nums tracking-tight" data-testid="saved">
            {String(saved(subs))} lei
          </p>
        </div>
      </div>
      <ul className="min-h-0 flex-1 overflow-auto p-2">
        {ranked.map((sub) => (
          <li
            key={sub.id}
            data-testid={`sub-${sub.id}`}
            className={`flex items-center justify-between gap-3 rounded-md px-3 py-2.5 ${
              sub.cancelled ? "text-muted-foreground line-through" : ""
            }`}
          >
            <div>
              <p className="text-[14px] font-medium">{sub.name}</p>
              <p className="text-[12px] text-muted-foreground">
                {String(sub.monthlyLei)} lei / mo · {String(yearly(sub.monthlyLei))} lei / yr
              </p>
            </div>
            {sub.cancelled ? null : (
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full px-3 text-[12px]"
                data-testid={`cancel-${sub.id}`}
                onClick={() => cancel(sub.id)}
              >
                Cancel
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
