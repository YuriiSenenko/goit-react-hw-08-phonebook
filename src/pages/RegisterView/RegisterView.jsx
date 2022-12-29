import css from './RegisterView.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/auth-operations';

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
    <div>
      <h1>Register Page</h1>
      <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
        <label className={css.formItem}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={css.formItem}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.formItem}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
