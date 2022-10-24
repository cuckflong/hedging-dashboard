import { fetchMarginLevel } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function MarginLevelStat() {
  return (
    <>
      <BaseStat
        label="Margin Level"
        fetchFunction={fetchMarginLevel}
        preSymbol=""
        postSymbol="%"
      ></BaseStat>
    </>
  );
}
