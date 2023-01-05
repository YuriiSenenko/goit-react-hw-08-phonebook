import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';

import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/auth-selectors';

import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
