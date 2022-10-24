import { fetchSwapTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function SwapTotalStat() {
  return (
    <>
      <BaseStat
        label="Total Swap Value"
        fetchFunction={fetchSwapTotal}
        preSymbol="$"
        postSymbol=""
      ></BaseStat>
    </>
  );
}
