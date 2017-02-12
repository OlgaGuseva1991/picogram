import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import MainPage from './pages/MainPage';
import ImagePage from './pages/ImagePage';
import UploadPage from './pages/UploadPage';
import ErrorPage from './pages/ErrorPage';

require('font-awesome/css/font-awesome.css');
require('./less/style.less');
require('./scripts/test.js');

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainPage} />
        <Route path='/image/{id}' component={ImagePage} />
        <Route path='/upload' component={UploadPage} />

        <Route path='/*' component={ErrorPage} />
      </Router>
    );
  }
}

export default Picogram;
