import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DraftPage from './pages/DraftPage';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={DraftPage} />
          {/* Additional routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;