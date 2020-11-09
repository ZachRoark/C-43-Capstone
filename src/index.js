import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { CraftIt } from "./components/CraftIt";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CraftIt />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

