import { fetchPnlHistory } from "../../api/history";
import BaseLineHistory from "./BaseLineHistory";

export default function PnLHistory() {
  return (
    <>
      <BaseLineHistory
        fetchFunction={function () {
          return fetchPnlHistory(null, 0.5);
        }}
        title="PnL History"
        seriesName="USD"
      />
    </>
  );
}
