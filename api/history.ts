import axios from "axios";

import { apiServerURL } from "../lib/config";

function getQueryString(minDiff: number | null, minOffset: number | null) {
  let queryParams = "?";
  if (minDiff != null) {
    queryParams += "min_diff=" + minDiff + "&";
  }

  if (minOffset != null) {
    queryParams += "min_offset=" + minOffset + "&";
  }
  return queryParams;
}

export async function fetchLiquidTotalHistory(
  minDiff: number | null,
  minOffset: number | null
) {
  const queryParams = getQueryString(minDiff, minOffset);

  const res = await axios.get<{
    liquid_total: Array<number>;
    unix_time: Array<number>;
  }>(apiServerURL + "/liquid/total/history" + queryParams);
  return [res.data.liquid_total, res.data.unix_time];
}

export async function fetchDotRewardHistory(
  minDiff: number | null,
  minOffset: number | null
) {
  const queryParams = getQueryString(minDiff, minOffset);
  const res = await axios.get<{
    dot_reward_total: Array<number>;
    unix_time: Array<number>;
  }>(apiServerURL + "/dot/reward/history" + queryParams);
  return [res.data.dot_reward_total, res.data.unix_time];
}

export async function fetchExposureHistory(
  minDiff: number | null,
  minOffset: number | null
) {
  const queryParams = getQueryString(minDiff, minOffset);
  const res = await axios.get<{
    net_exposure: Array<number>;
    unix_time: Array<number>;
  }>(apiServerURL + "/exposure/history" + queryParams);
  return [res.data.net_exposure, res.data.unix_time];
}

export async function fetchPnlHistory(
  minDiff: number | null,
  minOffset: number | null
) {
  const queryParams = getQueryString(minDiff, minOffset);
  const res = await axios.get<{
    pnl: Array<number>;
    unix_time: Array<number>;
  }>(apiServerURL + "/pnl/history" + queryParams);
  return [res.data.pnl, res.data.unix_time];
}
