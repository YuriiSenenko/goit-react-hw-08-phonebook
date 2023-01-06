import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Box>
        <Button size="large" color="inherit">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            Home
          </Link>
        </Button>
      </Box>

      {isLoggedIn && (
        <Button size="large" color="inherit">
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/contacts"
          >
            Contacts
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
