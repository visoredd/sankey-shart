import { render, screen } from '@testing-library/react';
import { SankeyChart } from './SankeyChart'; // Adjust the path if necessary
import { Chart } from 'react-google-charts';

// Mock the Chart component since we don't need to test its implementation
vi.mock('react-google-charts', () => ({
  Chart: vi.fn(() => null), // Mock the Chart component to prevent actual rendering
}));

describe('SankeyChart component', () => {
  const mockData = [
    ['From', 'To', 'Weight'],
    ['A', 'B', 5],
    ['A', 'C', 7],
    ['B', 'D', 2],
  ];

  const mockOptions = {
    width: 600,
    height: 400,
  };

  it('should render without crashing', () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);
    
    // The Chart component should be rendered with the given props (mocked version)
    expect(Chart).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct data to the Chart component', () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);
    
    // Check if the mocked Chart component has been called with the correct props
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockData,
        options: mockOptions,
      }),
      expect.anything()
    );
  });

  it('should pass the correct options to the Chart component', () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);
    
    // Check that options are correctly passed to the Chart
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: mockOptions,
      }),
      expect.anything()
    );
  });
});
