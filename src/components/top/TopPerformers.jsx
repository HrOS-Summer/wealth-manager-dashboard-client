import { formatCurrency, pct, gainColor } from "../../utils/format";

export default function TopPerformers({ summary }) {
  if (!summary) return null;
  const { topPerformer, worstPerformer, diversificationScore, riskLevel } = summary;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="rounded-lg border p-4 bg-white">
        <div className="text-sm text-neutral-500 mb-1">Best Performer</div>
        {topPerformer ? (
          <>
            <div className="font-semibold">{topPerformer.name} ({topPerformer.symbol})</div>
            <div className={`text-lg ${gainColor(topPerformer.gainPercent)}`}>{pct(topPerformer.gainPercent)}</div>
          </>
        ) : (
          <div className="text-neutral-500">N/A</div>
        )}
      </div>
      <div className="rounded-lg border p-4 bg-white">
        <div className="text-sm text-neutral-500 mb-1">Worst Performer</div>
        {worstPerformer ? (
          <>
            <div className="font-semibold">{worstPerformer.name} ({worstPerformer.symbol})</div>
            <div className={`text-lg ${gainColor(worstPerformer.gainPercent)}`}>{pct(worstPerformer.gainPercent)}</div>
          </>
        ) : (
          <div className="text-neutral-500">N/A</div>
        )}
      </div>

      <div className="rounded-lg border p-4 bg-white">
        <div className="text-sm text-neutral-500 mb-1">Insights</div>
        <div className="flex items-center justify-between">
          <div>Diversification</div>
          <div className="font-semibold">{diversificationScore?.toFixed ? diversificationScore.toFixed(1) : diversificationScore}/10</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Risk Level</div>
          <div className="font-semibold">{riskLevel}</div>
        </div>
      </div>
    </div>
  );
}