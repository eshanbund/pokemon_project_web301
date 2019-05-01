import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Feed from './pages/Feed/Feed';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
