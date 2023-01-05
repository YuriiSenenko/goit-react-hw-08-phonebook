import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../redux/auth/auth-operations';
import { Box, Fab, TextField } from '@mui/material';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Email"
        size="small"
        variant="standard"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        size="small"
        variant="standard"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Fab
        color="primary"
        variant="extended"
        size="small"
        type="submit"
        aria-label="logIn"
      >
        Log In
      </Fab>
    </Box>
  );
};

export default LoginView;
