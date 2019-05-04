import React, { Fragment } from 'react';
import { render } from 'react-dom';
import SkipLinks from '../../src';

const Demo = () => {
  const links = [
    { title: 'Skip to main content', to: 'main' },
    { title: 'Skip to footer', to: 'footer' }
  ];

  return (
    <Fragment>
      <SkipLinks links={links}/>
      <h1>Skip Links Demo</h1>
      <p>Hi, Press tab dude.</p>
      <div style={{ height: '100vh' }}/>
      <main id="main" style={{ height: '100vh' }} tabIndex="-1">
        <a href="#hi">Hi Again</a>
      </main>
      <footer id="footer" style={{ height: '50vh' }}>
        <a href="#bye">Bye</a>
      </footer>
    </Fragment>
  );
};

render(<Demo/>, document.querySelector('#demo'));
