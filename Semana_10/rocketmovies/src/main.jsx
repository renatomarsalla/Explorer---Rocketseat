import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App';

import theme from './styles/theme.js';
import GlobalStyle from './styles/global.js';
import { ThemeProvider } from 'styled-components';

import { Signin } from './pages/Signin/index.jsx';
import { Signup } from './pages/Signup/index.jsx';
import { Profile } from './pages/Profile/index.jsx';
import { Home } from './pages/Home/index.jsx';
import { CreateMovies } from './pages/CreateMovie/index.jsx';
import { PreviewMovie } from './pages/PreviewMovie/index.jsx';

import { Routes } from './routes/index.jsx';

import { AuthProvider } from './hooks/auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* <PreviewMovie /> */}
    </ThemeProvider>
  </React.StrictMode>
);
