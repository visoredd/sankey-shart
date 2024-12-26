import { render, screen } from '@testing-library/react';
import { SankeyChart } from './SankeyChart';
import { Chart } from 'react-google-charts';

vi.mock('react-google-charts', () => ({
  Chart: vi.fn(() => null),
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
    
    expect(Chart).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct data to the Chart component', () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);
    
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
    
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: mockOptions,
      }),
      expect.anything()
    );
  });
});
