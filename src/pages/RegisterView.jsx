import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../redux/auth/auth-operations';
import { Box, Fab, TextField } from '@mui/material';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
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
        label="Name"
        size="small"
        variant="standard"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
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
        label=" Password"
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
        aria-label="register"
      >
        Sign Up
      </Fab>
    </Box>
  );
};

export default RegisterView;
