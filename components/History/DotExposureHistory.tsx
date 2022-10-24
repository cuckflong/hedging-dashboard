import { fetchExposureHistory } from "../../api/history";
import BaseLineHistory from "./BaseLineHistory";

export default function NetExposureHistory() {
  return (
    <>
      <BaseLineHistory
        fetchFunction={function () {
          return fetchExposureHistory(0.01, null);
        }}
        title="Net Exposure History"
        seriesName="DOT"
      />
    </>
  );
}
