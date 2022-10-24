import { Skeleton } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";

interface StatProps {
  fetchFunction: () => Promise<number>;
  label: string;
  preSymbol: string;
  postSymbol: string;
}

export function BaseStat({
  fetchFunction,
  label,
  preSymbol,
  postSymbol,
}: StatProps) {
  const data = useQuery(label, fetchFunction);

  return (
    <>
      <Skeleton isLoaded={!data.isLoading} fadeDuration={1} borderRadius={5}>
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber color="#a4ffff">
            {preSymbol}
            {data.data?.toFixed(2) as string}
            {postSymbol}
          </StatNumber>
        </Stat>
      </Skeleton>
    </>
  );
}
