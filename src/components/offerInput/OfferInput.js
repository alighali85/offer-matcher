import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4),

  },
  inputField: {
    margin: theme.spacing(2),
    maxWidth: '496px',
    minWidth: '296px',
    alignSelf: 'center',

  },
  submitButton: {
    margin: theme.spacing(2),
    maxWidth: '496px',
    minWidth: '296px',
    alignSelf: 'center',

  },
  alert: {
    margin: '24px',
  },
}));

export default function OfferInput({
  offerValue, onInput, fieldLabel, fieldValue, onSubmit, title,
}) {
  const classes = useStyles();

  if (offerValue) {
    return (
      <div className={classes.alert}>
        <Alert severity="info">
          <AlertTitle><strong>Value entered</strong></AlertTitle>
          the value is saved, waiting for other party to enter the expectation.
          {' '}
        </Alert>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center">{title}</Typography>
      <TextField
        className={classes.inputField}
        id="standard-basic"
        type="number"
        label={fieldLabel}
        variant="outlined"
        onChange={onInput}
        value={fieldValue}
        InputProps={{
          startAdornment: <InputAdornment position="start">$ </InputAdornment>,
          inputProps: { min: 0, max: 9999999999 },
          placeholder: 'enter value grater than 0',
        }}
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
