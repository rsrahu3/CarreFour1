import * as React from 'react';
import history from './common/history';
import TopHeader from './common/TopHeader';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function LoginComponent() {
  const classes = useStyles();
  const formSubmit = () => {
    history.push('/home');
  };
  return (
    <div id="login">
      <TopHeader />
      <div className="form">
        <form
          id="loginForm"
          onSubmit={formSubmit}
          style={{ width: '30%', padding: '20px' }}
        >
          <div className="form-group">
            <TextField
              id="standard-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              margin="normal"
              required
            />
          </div>
          <div className="form-group">
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              required
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
