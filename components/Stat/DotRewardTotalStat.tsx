import { fetchDotRewardTotal } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function DotRewardTotalStat() {
  return (
    <>
      <BaseStat
        label="DOT Reward Total"
        fetchFunction={fetchDotRewardTotal}
        preSymbol=""
        postSymbol=" DOT"
      ></BaseStat>
    </>
  );
}
