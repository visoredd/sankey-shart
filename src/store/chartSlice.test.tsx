import { chartSlice, updateChart } from './chartSlice'; // Adjust the path if necessary
import type { ChartState } from '../model';

describe('chartSlice', () => {
  // Define the initial state to match the `ChartState`
  const initialState: ChartState = {
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
          colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
          nodePadding: 50,
        },
        link: {
          colorMode: 'gradient',
          colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
        },
      },
    },
  };

  it('should return the initial state', () => {
    // Testing the default state
    const state = chartSlice.reducer(undefined, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it('should update data when updateChart is dispatched', () => {
    const newData = [
      ["From", "To", "Weight"],
      ["Salary", "Bills", 4000],
      ["Bills", "Mobile", 1500],
    ];

    const action = updateChart(newData);

    const newState = chartSlice.reducer(initialState, action);

    expect(newState.data).toEqual(newData); // Verify that data is updated correctly
  });

  it('should not affect other parts of the state when updateChart is dispatched', () => {
    const newData = [
      ["From", "To", "Weight"],
      ["Salary", "Bills", 4000],
    ];

    const action = updateChart(newData);
    const newState = chartSlice.reducer(initialState, action);

    // Check that the options property remains unchanged
    expect(newState.options).toEqual(initialState.options);
  });
});
