import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

import { IconButton, Typography, Box, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>{userEmail}</Typography>
      <Tooltip title="Log Out" placement="bottom">
        <IconButton
          color="inherit"
          size="large"
          onClick={() => dispatch(logOut())}
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UserMenu;
