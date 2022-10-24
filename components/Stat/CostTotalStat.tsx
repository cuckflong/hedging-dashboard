import { fetchCostTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function CostTotalStat() {
  return (
    <>
      <BaseStat
        label="Total Cost"
        fetchFunction={fetchCostTotal}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
