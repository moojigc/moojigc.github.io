import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './pages';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.scss';

function App() {
  const [mounted, setMounted] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Nav />
        <Route exact path={['/', '/:lang', '/about', '/about/:lang']}>
          <About setMounted={setMounted} />
        </Route>
        <Footer mounted={mounted} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
