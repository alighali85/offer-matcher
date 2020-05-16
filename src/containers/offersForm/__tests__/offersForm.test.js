import React from 'react';
import { render } from '@testing-library/react';
import { TABS_DATA } from '../../../config/main';
import OffersForm from '../OffersForm';
import TabsBar from '../../../components/tabsBar/TabsBar';
import OfferInput from '../../../components/offerInput/OfferInput';

describe('Main Offers form', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<OffersForm tabs={TABS_DATA} />);
    const appHeaderContainer = getByTestId(OffersForm.testId);
    expect(appHeaderContainer).toBeInTheDocument();
  });

  it('shows tabs bar', () => {
    const { getByTestId } = render(<OffersForm tabs={TABS_DATA} />);
    const appHeaderContainer = getByTestId(TabsBar.testId);
    expect(appHeaderContainer).toBeInTheDocument();
  });

  it('has input field', () => {
    const { getByTestId } = render(<OffersForm tabs={TABS_DATA} />);
    const appHeaderContainer = getByTestId(OfferInput.withoutValueTestId);
    expect(appHeaderContainer).toBeInTheDocument();
  });
});
