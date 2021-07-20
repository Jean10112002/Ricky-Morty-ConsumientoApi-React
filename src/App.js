import Characters from './pages/Characters'
import  'bootswatch/dist/lumen/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Nav from './components/Nav'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
          <Route path="/" exact>
            <Characters/>
          </Route>
          <Route path="/profile/:id">
            <Profile/>   
          </Route>
          <Route path="*">
            <h1 className="text-center text-danger mt-5">Page not found</h1>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
