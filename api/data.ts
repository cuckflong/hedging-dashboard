import axios from "axios";

import { apiServerURL } from "../lib/config";

export async function fetchDotBalanceTotal() {
  const res = await axios.get<{ dot_total: number }>(
    apiServerURL + "/dot/balance"
  );
  return res.data.dot_total;
}

export async function fetchDotStakedTotal() {
  const res = await axios.get<{ dot_staked_total: number }>(
    apiServerURL + "/dot/staked"
  );
  return res.data.dot_staked_total;
}

export async function fetchDotStakedRatio() {
  const res = await axios.get<{ staked_ratio: number }>(
    apiServerURL + "/dot/staked/ratio"
  );
  return res.data.staked_ratio;
}

export async function fetchDotRewardTotal() {
  const res = await axios.get<{ dot_reward_total: number }>(
    apiServerURL + "/dot/reward"
  );
  return res.data.dot_reward_total;
}

export async function fetchLiquidTotal() {
  const res = await axios.get<{ liquid_total: number }>(
    apiServerURL + "/liquid/total"
  );
  return res.data.liquid_total;
}

export async function fetchSwapTotal() {
  const res = await axios.get<{ total_swap: number }>(
    apiServerURL + "/swap/total"
  );
  return res.data.total_swap;
}

export async function fetchCostTotal() {
  const res = await axios.get<{ total_cost: number }>(
    apiServerURL + "/cost/total"
  );
  return res.data.total_cost;
}

export async function fetchPnlAggregated() {
  const res = await axios.get<{ pnl_aggregated: number }>(
    apiServerURL + "/pnl/aggregated"
  );
  return res.data.pnl_aggregated;
}

export async function fetchPnlTotal() {
  const res = await axios.get<{ pnl_total: number }>(
    apiServerURL + "/pnl/total"
  );
  return res.data.pnl_total;
}

export async function fetchNetExposure() {
  const res = await axios.get<{ net_exposure: number }>(
    apiServerURL + "/exposure/net"
  );
  return res.data.net_exposure;
}

export async function fetchMarginLevel() {
  const res = await axios.get<{ margin_level: number }>(
    apiServerURL + "/margin/level"
  );
  return res.data.margin_level;
}

export async function fetchApr() {
  const res = await axios.get<{ apr: number }>(apiServerURL + "/apr");
  return res.data.apr;
}
