import { fetchNetExposure } from "../../api/data";
import { BaseStat } from "./BaseStat";

export function DotNetExposureStat() {
  return (
    <>
      <BaseStat
        label="Net Exposure"
        fetchFunction={fetchNetExposure}
        preSymbol=""
        postSymbol=" DOT"
      ></BaseStat>
    </>
  );
}
