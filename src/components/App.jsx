import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Suspense, lazy, useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import Loader from './Loader/Loader';

import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts">
                    <Registration />
                </RestrictedRoute>
          
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Contacts />
                  </PrivateRoute>}
            />
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </Layout>
    
  );
}
      /* <Title />
      <ContactForm />
      <SearchBar />
      {contacts.length > 0 ? <ContactList /> : <Notification />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader>Loading message</Loader>} */
    
