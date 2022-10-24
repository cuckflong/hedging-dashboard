import { fetchApr } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function AprStat() {
  return (
    <>
      <BaseStat
        label="APR"
        fetchFunction={fetchApr}
        preSymbol=""
        postSymbol="%"
      ></BaseStat>
    </>
  );
}
