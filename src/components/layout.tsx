import React from 'react';

import './variables.css';
import './global.css';
import Seo from './seo';
import Navigation from './navigation';
import Footer from './footer';

interface TemplateProps {
  children: React.ReactNode;
}

class Template extends React.Component<TemplateProps> {
  render() {
    const { children } = this.props;

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Template;
