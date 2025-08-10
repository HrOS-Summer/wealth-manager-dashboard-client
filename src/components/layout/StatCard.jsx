import { gainBg, gainColor, formatCurrency, pct, formatNumber } from "../../utils/format";

export default function StatCard({ icon: Icon, label, value, delta, emphasize = false }) {
  const deltaColor = delta != null ? gainColor(delta) : "text-neutral-500";
  const deltaBg = delta != null ? gainBg(delta) : "bg-neutral-100";
  return (
    <div className={`rounded-lg border bg-white shadow-sm p-4 ${emphasize ? "ring-1 ring-neutral-200" : ""}`}>
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-neutral-600" />}
        <div className="text-sm text-neutral-500">{label}</div>
      </div>
      <div className="mt-2 text-2xl font-semibold">{typeof value === "number" ? formatCurrency(value) : value}</div>
      {delta != null && (
        <div className={`mt-2 inline-flex items-center gap-2 text-sm px-2 py-1 rounded ${deltaBg} ${deltaColor}`}>
          <span>{pct(delta)}</span>
        </div>
      )}
    </div>
  );
}