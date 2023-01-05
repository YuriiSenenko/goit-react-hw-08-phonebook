import { Box, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button size="large" color="inherit" href="/register">
        Sign up
      </Button>

      <Box sx={{ ml: '20px' }}>
        <Button size="large" color="inherit" href="/login">
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default AuthNav;
