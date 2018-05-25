import React from 'react';
import PropTypes from 'prop-types';
import ErrorHandler from '../errorHandler/errorHandler';
import Footer from '../footer/footer';
import Header from '../header/header';

const App = ({ children }) => (
  <ErrorHandler>
    <Header />
    <main className="container py-3">
      {children}
    </main>
    <Footer />
  </ErrorHandler>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
