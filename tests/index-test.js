import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import SkipLinks from 'src/';

describe('Skip links component', () => {
  let node;
  const skipLink = (
    <SkipLinks links={[{ title: 'skip to content', to: 'main' }]}/>
  );

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('has a skip link element', () => {
    render(skipLink, node, () => {
      expect(node.innerHTML).toBeTruthy();
    });
  });

  it('has a skip link content', () => {
    render(skipLink, node, () => {
      expect(node.innerHTML).toContain('skip to content');
    });
  });

  it('has a skip link href', () => {
    render(skipLink, node, () => {
      expect(node.innerHTML).toContain('href="#main"');
    });
  });
});

describe('Skip links component without prop', () => {
  let node;
  const skipLink = <SkipLinks/>;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('has not a skip link element', () => {
    render(skipLink, node, () => {
      expect(node.innerHTML).toBeFalsy();
    });
  });

  it('has not a skip link content', () => {
    render(skipLink, node, () => {
      expect(node.innerHTML).toEqual('');
    });
  });
});
