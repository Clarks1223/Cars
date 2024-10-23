import { AuthProvider } from './context/auth';
import { Login } from './Components/Login';
import { CarsExist } from './Components/CarList';
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Carshop</Typography>
          </Toolbar>
        </AppBar>
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
