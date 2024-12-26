export interface SankeyChartOptions {
    height?: number;
    width?: number;
    sankey?: {
      node?: {
        width?: number;
        padding?: number;
        colors?: string[];
        nodePadding?: number;
      };
      link?: {
        colorMode?: string;
        colors?: string[];
      };
    };
  }
  export interface ChartState {
    data: (string | number)[][];
    options: SankeyChartOptions
  }