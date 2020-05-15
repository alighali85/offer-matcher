import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppHeader from './components/appHeader';
import OffersForm from './containers/offersForm';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
});

const tabsData = [
  {
    id: 0,
    label: 'Employer',
    name: 'employer',
    title: 'As an Employer, enter your maximum offer:',
  },
  {
    id: 1,
    label: 'Employee',
    name: 'employee',
    title: 'As an Employee, enter your minimum acceptable number:',
  },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="app-wrapper">
      <AppHeader />
      <OffersForm tabs={tabsData} />
    </div>
  );
}

export default App;
