import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  const [weather, setWeather] = useState({});
  useEffect(() => {
    try {
      fetch('http://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then((res) => res.json()).then((data) => {
          if (data.name) {
            setWeather({
              city: data.name,
              tempreature: Math.round(data.main.temp),
              icon: data.weather[0].icon,
            });
          }
        });
    } catch (error) {
      console.log('there is an error getting the weather infos');
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MonetizationOnIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Offer matcher
          </Typography>
          <Button color="inherit" href="https://openweathermap.org/city/2643743">
            <span>
              {' '}
              {weather.city}
            </span>
          </Button>
          {!!weather.icon && <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="weather-icon" />}
          <span>
            {' '}
            {weather.tempreature}
            {' '}
            °C
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
