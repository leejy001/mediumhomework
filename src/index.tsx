import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './style/Theme'
import GlobalStyle from './style/GlobalStyle'
import App from './App';
import Tab from './common/Tab';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Tab />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);