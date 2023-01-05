import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button size="large" color="inherit">
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">
          Sign up
        </Link>
      </Button>

      <Box sx={{ ml: '20px' }}>
        <Button size="large" color="inherit">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
            Log in
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default AuthNav;
