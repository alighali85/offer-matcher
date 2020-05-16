import React from 'react';
import { render } from '@testing-library/react';
import ResultModal from '../ResultModal';

describe('Result modal component', () => {
  it('shows Failure result', () => {
    const { getByText } = render(<ResultModal result={false} />);
    expect(getByText(/Failure!/i)).toBeInTheDocument();
  });

  it('shows Success result', () => {
    const { getByText } = render(<ResultModal result offers={{ emplyer: 30, employee: 20 }} />);
    expect(getByText(/Success!/i)).toBeInTheDocument();
  });
});
