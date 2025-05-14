import registryData from "@/public/registry.json";
import { useMemo } from "react";

export type StatCount = {
  components: number;
  blocks: number;
  examples: number;
  total: number;
};

/**
 *  Custom hook to get the counts of components, blocks, and examples from the registry data.
 * @returns
 */
export function useRegistryCounts(): StatCount {
  const counts = useMemo(() => {
    const initialCounts = registryData.registry.reduce(
      (acc: StatCount, item: { type: string }) => {
        if (item.type === "registry:component") {
          acc.components += 1;
        } else if (item.type === "registry:block") {
          acc.blocks += 1;
        } else if (item.type === "registry:example") {
          acc.examples += 1;
        }
        return acc;
      },
      { blocks: 0, components: 0, examples: 0, total: 0 }
    );

    const total =
      initialCounts.components + initialCounts.blocks + initialCounts.examples;

    return { ...initialCounts, total };
  }, []);

  return counts;
}
