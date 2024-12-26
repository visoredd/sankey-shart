import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { SankeyChart } from './SankeyChart';
import type { RootState } from './store/store';

// Mocking the SankeyChart component to focus on the App component
vi.mock('./SankeyChart', () => ({
  SankeyChart: vi.fn(() => null), // We only need to check if it's called with the right props
}));

// Sample initial state to mock the Redux store
const mockState: RootState = {
  chartSlice: {
    data: [
      ['From', 'To', 'Weight'],
      ['A', 'B', 5],
      ['A', 'C', 7],
      ['B', 'D', 2],
    ],
    options: { width: 600, height: 400 },
  },
};

const mockStore = createStore((state = mockState) => state);

describe('App component', () => {
  it('should render SankeyChart with the correct data and options', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    // Ensure that SankeyChart is rendered with the correct data and options
    expect(SankeyChart).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockState.chartSlice.data,
        options: mockState.chartSlice.options,
      }),
      expect.anything()
    );
  });

});
