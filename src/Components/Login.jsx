import { Button, TextField, Stack } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { Snackbar } from '@mui/material';
import { CarsExist } from './CarList';
import { useState } from 'react';

export function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const { signIn, isAuthenticated, logOut, error, setError } = useAuth();

  const login = () => {
    signIn(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Button onClick={logOut}>LogOut</Button>
          <CarsExist />
        </div>
      ) : (
        <div>
          <Snackbar
            open={error}
            autoHideDuration={3000}
            onClose={() => setError(false)}
            message="Login failed: Check your username and password"
          />
          <Stack>
            <TextField
              name="username"
              label="Username"
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              onChange={handleChange}
            />
            <br />
            <Button variant="outlined" color="primary" onClick={login}>
              Login
            </Button>
          </Stack>
        </div>
      )}
    </>
  );
}
