
import { Chart } from "react-google-charts";
import type { ChartState } from "./model";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";



export const SankeyChart = ({ data, options }:ChartState) => {
    const { t } = useTranslation();

    // Memoize the translated data to avoid unnecessary recalculations
    const translatedData = useMemo(() => {
      return data.map((row) => {
        // Translate "From" and "To" columns (index 0 and 1), but not the "Weight" column (index 2)
        return row.map((item) => {
          if (typeof item === "string") {
            return t(item) || item; // Translate only the "From" and "To" labels
          }
          return item; // Return the weight (numeric value) unchanged
        });
      });
    }, [data, t]);
    console.log(translatedData)
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="100%"
      data={translatedData}
      options={options}
    />
  );
};
