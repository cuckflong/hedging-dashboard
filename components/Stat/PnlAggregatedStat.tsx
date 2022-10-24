import { fetchPnlAggregated } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function PnlAggregatedStat() {
  return (
    <>
      <BaseStat
        label="Aggregated PnL"
        fetchFunction={fetchPnlAggregated}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
