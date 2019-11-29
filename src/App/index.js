import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AntdDemo from 'examples/antd';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/antd" component={AntdDemo} />
    </Router>
  );
}

export default App;
