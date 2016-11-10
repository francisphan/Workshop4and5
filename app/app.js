import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed.js';
import { getFeedData } from './server.js';

ReactDOM.render(
  <Feed user={4}/>,
  document.getElementById('fb-feed')
);
