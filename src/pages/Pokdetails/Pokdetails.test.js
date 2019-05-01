import React from 'react';
import ReactDOM from 'react-dom';
import Loadingb from '../../components/Loading/Loadingb';
import axios from 'axios';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loadingb />, div);
  ReactDOM.unmountComponentAtNode(div);
});
