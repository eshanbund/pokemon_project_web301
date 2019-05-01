import React from 'react';
import ReactDOM from 'react-dom';
import Loadingb from './loading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loadingb />, div);
  ReactDOM.unmountComponentAtNode(div);
});
