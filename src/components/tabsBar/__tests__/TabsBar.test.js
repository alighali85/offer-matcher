import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabsBar from '../TabsBar';
import { TABS_DATA } from '../../../config/main';


describe('Form tabs bar', () => {
  it('shows employee and employer tabs', () => {
    const { getByText } = render(<TabsBar activeId={0} source={TABS_DATA} />);
    expect(getByText(TABS_DATA[0].label)).toBeInTheDocument();
    expect(getByText(TABS_DATA[1].label)).toBeInTheDocument();
  });

  it('calls on click function', () => {
    const tabClick = jest.fn();
    const { getByText } = render(<TabsBar activeId={0} source={TABS_DATA} onClick={tabClick} />);
    const tabElement = getByText(/Employer/i);
    fireEvent.click(tabElement);
    expect(tabClick).toBeCalled();
  });
});
