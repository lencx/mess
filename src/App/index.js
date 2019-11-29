import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from 'store';
import AntdDemo from 'examples/antd';
import './App.css';

function App() {
  return (
    <StateProvider>
      <Router>
        <Route exact path="/antd" component={AntdDemo} />
      </Router>
    </StateProvider>
  );
}

export default App;
