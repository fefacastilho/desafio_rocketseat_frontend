import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';

import theme from "./styles/theme"
 
import Details from './pages/Details';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Logo } from './components/Logo';
import { AddPratos} from "./pages/AddPratos";
import { EditPratos} from "./pages/EditPratos"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      < Details/>
    </ThemeProvider>
  </React.StrictMode>,
)
