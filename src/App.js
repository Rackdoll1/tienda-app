
import '../src/App.css'
// importamos Navbar
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Navbar />
      {/* exact especificamente */}
      <Route exact path="/">
        <h3>Info de home</h3>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/signup">
        <Signup></Signup>
      </Route>

    </Router>
  );
}

export default App;
