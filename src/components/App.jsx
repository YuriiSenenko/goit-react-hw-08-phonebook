import { Container } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/auth/auth-operations';

import Header from './Header';

const Home = lazy(() => import('../pages/Home'));
const ContactForm = lazy(() => import('../pages/ContactForm'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterView />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginView />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </Container>
  );
}
