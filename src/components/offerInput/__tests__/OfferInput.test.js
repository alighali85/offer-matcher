import React from 'react';
import { render } from '@testing-library/react';
import OfferInput from '../OfferInput';

describe('Main Offer input component', () => {
  it('shoew input form when no saved value', () => {
    const { getByTestId, getByText } = render(<OfferInput />);
    const OfferInputContainer = getByTestId(OfferInput.withoutValueTestId);
    const submitButton = getByText(/submit/i);
    expect(OfferInputContainer).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('shows saved input value', () => {
    const { getByTestId } = render(<OfferInput offerValue={50} />);
    const OfferInputContainer = getByTestId(OfferInput.withValueTestId);
    expect(OfferInputContainer).toBeInTheDocument();
  });
});
