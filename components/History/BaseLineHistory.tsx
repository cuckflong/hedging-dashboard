import { Box, Button, HStack, Skeleton, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface LineHistoryProps {
  fetchFunction: () => Promise<Array<Array<number>>>;
  title: string;
  seriesName: string;
  id: string;
}

export default function BaseLineHistory({
  fetchFunction,
  title,
  seriesName,
  id,
}: LineHistoryProps) {
  const queryData = useQuery(title, fetchFunction);

  let historyData: Array<number> = [];
  let historyTime: Array<number> = [];

  const historyDataNew: Array<number> = [];
  const historyTimeNew: Array<number> = [];

  if (queryData.isSuccess) {
    historyData = queryData.data[0];
    historyTime = queryData.data[1];
    for (let i = 0; i < historyData.length; i++) {
      historyDataNew.push(Number(historyData[i].toFixed(2)));
      historyTimeNew.push(historyTime[i] * 1000);
    }
  }

  function handleZoom(days: number) {
    const startDate: number = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000
    ).getTime();
    ApexCharts.exec(id, "zoomX", startDate, Date.now());
  }

  return (
    <>
      <Skeleton
        isLoaded={queryData.isSuccess}
        fadeDuration={1}
        borderRadius={5}
      >
        <Box>
          <HStack paddingBottom={4} paddingLeft={4}>
            <Button onClick={() => handleZoom(7)}>7D</Button>
            <Button onClick={() => handleZoom(14)}>2W</Button>
            <Button onClick={() => handleZoom(30)}>1M</Button>
            <Button onClick={() => handleZoom(90)}>3M</Button>
            <Button
              onClick={() =>
                handleZoom(
                  (Date.now() - new Date("09 Oct 2022").getTime()) /
                    24 /
                    60 /
                    60 /
                    1000
                )
              }
            >
              YTD
            </Button>
          </HStack>
          <Chart
            height={300}
            type="line"
            series={[
              {
                name: seriesName,
                data: historyDataNew,
              },
            ]}
            zoom={{
              autoScaleYaxis: true,
            }}
            options={{
              title: {
                text: title,
                style: {
                  color: "#ffffff",
                },
              },
              fill: {
                type: "gradient",
              },
              annotations: {
                yaxis: [
                  {
                    y: 0,
                    strokeDashArray: 0,
                    borderColor: "#ec8e00",
                    borderWidth: 1,
                    opacity: 1,
                  },
                ],
              },
              stroke: {
                curve: "smooth",
              },
              markers: {
                size: 3,
                colors: "#1ebbff",
                strokeWidth: 3,
              },
              xaxis: {
                categories: historyTimeNew,
                type: "datetime",
                labels: {
                  style: {
                    colors: "#ffffff",
                  },
                },
              },
              yaxis: {
                forceNiceScale: true,
                labels: {
                  style: {
                    colors: "#ffffff",
                  },
                },
              },
              tooltip: {
                theme: "dark",
              },
              chart: {
                id: id,
                toolbar: {
                  tools: {
                    download: false,
                  },
                },
                zoom: {
                  autoScaleYaxis: true,
                },
                events: {
                  mounted: function () {
                    handleZoom(7);
                  },
                },
              },
            }}
          ></Chart>
        </Box>
      </Skeleton>
    </>
  );
}
