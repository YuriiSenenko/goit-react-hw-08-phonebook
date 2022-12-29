import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authList}>
      <NavLink to="/register" className={css.authItem}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.authItem}>
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
