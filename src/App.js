import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppHeader from './components/appHeader';
import OffersForm from './containers/offersForm';
import { LONDON_WEATHER, TABS_DATA, APP_TITLE } from './config/main';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
});


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="app-wrapper">
      <AppHeader weatherApi={LONDON_WEATHER} title={APP_TITLE} />
      <OffersForm tabs={TABS_DATA} />
    </div>
  );
}

export default App;
