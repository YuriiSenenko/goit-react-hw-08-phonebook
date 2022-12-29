import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  return (
    <div className={css.userSection}>
      <p className={css.userEmail}>{`hello ${userEmail}`}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
