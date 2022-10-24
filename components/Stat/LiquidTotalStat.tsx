import { fetchLiquidTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function LiquidTotalStat() {
  return (
    <>
      <BaseStat
        label="Total Liquid Value"
        fetchFunction={fetchLiquidTotal}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
