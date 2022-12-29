import { fetchDotRewardHistory } from "../../api/history";
import BaseLineHistory from "./BaseLineHistory";

export default function DotRewardHistory() {
  return (
    <>
      <BaseLineHistory
        fetchFunction={function () {
          return fetchDotRewardHistory(0.1, null);
        }}
        title="Dot Rewards History"
        seriesName="Dot Reward"
        id="dotReward"
      />
    </>
  );
}
