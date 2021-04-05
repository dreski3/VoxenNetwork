import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js'
import Categories from './components/pages/Categories'
import Library from './components/pages/Library'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' component={Categories} />
          <Route path='/library' component={Library} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
