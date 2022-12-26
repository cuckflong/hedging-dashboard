import { fetchPpsRealizedPnl } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function PpsRealizedPnlStat() {
  return (
    <>
      <BaseStat
        label="PPS Realized PnL"
        fetchFunction={fetchPpsRealizedPnl}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
