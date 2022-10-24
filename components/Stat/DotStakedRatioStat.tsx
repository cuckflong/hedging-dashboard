import { fetchDotStakedRatio } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function DotStakedRatioStat() {
  return (
    <>
      <BaseStat
        label="DOT Staked Ratio"
        fetchFunction={fetchDotStakedRatio}
        preSymbol=""
        postSymbol="%"
      ></BaseStat>
    </>
  );
}
