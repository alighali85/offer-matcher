import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppHeader from './components/header';
import OffersForm from './containers/offersForm';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppHeader />
      <OffersForm />
    </div>
  );
}

export default App;
