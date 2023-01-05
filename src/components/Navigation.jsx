import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Box, Button } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Box sx={{ mr: '10px' }}>
        <Button size="large" color="inherit" href="/">
          Home
        </Button>
      </Box>

      {isLoggedIn && (
        <Button size="large" color="inherit" href="/contacts">
          Contacts
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
