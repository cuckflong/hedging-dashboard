import { Skeleton } from "@chakra-ui/react";
import { useQuery } from "react-query";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface LineHistoryProps {
  fetchFunction: () => Promise<Array<Array<number>>>;
  title: string;
  seriesName: string;
}

export default function BaseLineHistory({
  fetchFunction,
  title,
  seriesName,
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

  return (
    <>
      <Skeleton
        isLoaded={queryData.isSuccess}
        fadeDuration={1}
        borderRadius={5}
      >
        <Chart
          height={300}
          type="line"
          series={[
            {
              name: seriesName,
              data: historyDataNew,
            },
          ]}
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
              toolbar: {
                tools: {
                  download: false,
                },
              },
            },
          }}
        ></Chart>
      </Skeleton>
    </>
  );
}
