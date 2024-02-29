// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Collaboration from './Collaboration';
import DataVisualization from './DataVisualization';
import DataUpload from './DataUpload';
import Navbar from './Navbar';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/collaboration" component={Collaboration} />
          <Route path="/datavisualization" component={DataVisualization} />
          <Route path="/dataupload" component={DataUpload} />
          <Route exact path="/" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
