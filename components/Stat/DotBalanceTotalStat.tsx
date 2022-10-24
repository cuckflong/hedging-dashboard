import { fetchDotBalanceTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function DotBalanceTotalStat() {
  return (
    <>
      <BaseStat
        label="DOT Balance Total"
        fetchFunction={fetchDotBalanceTotal}
        preSymbol=""
        postSymbol=" DOT"
      ></BaseStat>
    </>
  );
}
