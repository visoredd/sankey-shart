import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ChartState } from '../model';

const colors:string[] = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];


const initialState:ChartState = {
  data: [
    ["From", "To", "Weight"],
    ["Income", "Salary", 5000],
    ["Salary", "Bills", 3000],
    ["Bills", "Electric", 1000],
    ["Bills", "Mobile", 2000],
    ["Salary", "Savings", 1000],
    ["Salary", "Investments", 500],
    ["Bills", "Groceries", 500],
    ["Bills", "Entertainment", 400],
    ["Savings", "Interest", 50],
    ["Investments", "Stocks", 300],
    ["Stocks", "Returns", 150],
  ],
  options: {
    height: 400,
    sankey: {
      node: {
        colors: colors,
        nodePadding: 50
      },
      link: {
        colorMode: 'gradient',
        colors: colors,
      }
    }
  },
};

export const chartSlice = createSlice({
  name: "chartSlice",
  initialState,
  reducers: {
    updateChart: (state, action: PayloadAction<string[][]>) => {
      state.data = action.payload;
    },
  },
});

export const { updateChart } = chartSlice.actions;

export default chartSlice.reducer;