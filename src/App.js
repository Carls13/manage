import React, { Fragment } from 'react';

import { GlobalStyles } from './GlobalStyles';

import { Header } from './components/Header/Header';
import { Testimonials } from './components/Testimonials/Testimonials';
import { PreFooter } from './components/PreFooter/PreFooter';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Presentation } from './components/Presentation/Presentation';

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Header />
      <Presentation />
      <About />
      <Testimonials />
      <PreFooter />
      <Footer />
    </Fragment>
  );
}

export default App;
