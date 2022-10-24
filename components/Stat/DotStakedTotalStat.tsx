import { fetchDotStakedTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function DotStakedTotalStat() {
  return (
    <>
      <BaseStat
        label="DOT Staked Total"
        fetchFunction={fetchDotStakedTotal}
        preSymbol=""
        postSymbol=" DOT"
      ></BaseStat>
    </>
  );
}
