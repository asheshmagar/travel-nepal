import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PageWrapper from "./components/PageWrapper"
import Home from "./components/pages/Home"
import Travel from "./components/pages/Travel"
import About from "./components/pages/About"
import LifeStyle from "./components/pages/LifeStyle"
import Contact from './components/pages/Contact';
import Thank from './components/pages/Thank';
function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
            
          />
          <Route
            path="/travel"
            component={Travel}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/lifestyle"
            component={LifeStyle}
          />to=
          <Route

            path="/contact"
            component={Contact}
          />
          <Route
            path="thank"
            component={Thank}
          />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
