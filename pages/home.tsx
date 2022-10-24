import { Container, SimpleGrid } from "@chakra-ui/react";

import NetExposureHistory from "../components/History/DotExposureHistory";
import DotRewardHistory from "../components/History/DotRewardHistory";
import LiquidTotalHistory from "../components/History/LiquidTotalHistory";
import PnLHistory from "../components/History/PnlHistory";
import { AprStat } from "../components/Stat/AprStat";
import { CostTotalStat } from "../components/Stat/CostTotalStat";
import { DotBalanceTotalStat } from "../components/Stat/DotBalanceTotalStat";
import { DotNetExposureStat } from "../components/Stat/DotNetPositionStat";
import { DotRewardTotalStat } from "../components/Stat/DotRewardTotalStat";
import { DotStakedRatioStat } from "../components/Stat/DotStakedRatioStat";
import { DotStakedTotalStat } from "../components/Stat/DotStakedTotalStat";
import { LiquidTotalStat } from "../components/Stat/LiquidTotalStat";
import { MarginLevelStat } from "../components/Stat/MarginLevelStat";
import { PnlAggregatedStat } from "../components/Stat/PnlAggregatedStat";
import { PnlTotalStat } from "../components/Stat/PnlTotalStat";
import { SwapTotalStat } from "../components/Stat/SwapTotalStat";

function Home() {
  return (
    <>
      <Container maxW="container.lg">
        <SimpleGrid column={1} spacing={5}>
          <SimpleGrid columns={4} spacing={5}>
            <LiquidTotalStat />
            <DotBalanceTotalStat />
            <DotStakedTotalStat />
            <DotStakedRatioStat />
            <DotRewardTotalStat />
            <SwapTotalStat />
            <CostTotalStat />
            <PnlTotalStat />
            <PnlAggregatedStat />
            <DotNetExposureStat />
            <MarginLevelStat />
            <AprStat />
          </SimpleGrid>
          <LiquidTotalHistory />
          <DotRewardHistory />
          <NetExposureHistory />
          <PnLHistory />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Home;
