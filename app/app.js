import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';
import { getFeedData } from './server';

ReactDOM.render(
  <Feed user={4}/>,
  document.getElementById('fb-feed')
);
