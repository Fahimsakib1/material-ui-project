import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/Theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}></RouterProvider>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
