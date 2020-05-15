import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import OffersForm from './containers/offersForm';
import AppHeader from './components/appHeader';

describe('Main App', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<App />);
    const appElement = getByTestId('app-wrapper');
    expect(appElement).toBeInTheDocument();
  });

  it('has main form component', () => {
    const { getByTestId } = render(<App />);
    const mainOffersForm = getByTestId(OffersForm.testId);
    expect(mainOffersForm).toBeInTheDocument();
  });

  it('has app header', () => {
    const { getByTestId } = render(<App />);
    const appHeader = getByTestId(AppHeader.testId);
    expect(appHeader).toBeInTheDocument();
  });
});
