import { fetchLiquidTotalHistory } from "../../api/history";
import BaseLineHistory from "./BaseLineHistory";

export default function LiquidTotalHistory() {
  return (
    <>
      <BaseLineHistory
        fetchFunction={function () {
          return fetchLiquidTotalHistory(0.8, null);
        }}
        title="Total Liquid Value History"
        seriesName="Total Liquid Value"
        id="liquidTotal"
      />
    </>
  );
}
