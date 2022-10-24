import { fetchPnlTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function PnlTotalStat() {
  return (
    <>
      <BaseStat
        label="Total PnL"
        fetchFunction={fetchPnlTotal}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
