
import './App.css';
// own scss styles
import "./styles/organismos/organismos.scss"
import Home from './components/Home/Home';
// import withItemsHome from './components/Hoc/withItemsHome';

// const URL = "https://ecomerce-master.herokuapp.com/api/v1/";

// const EnhancedHome = withItemsHome(Home, `${URL}item`);


function App() {
  return (
    <>
    <Home />
    </>
  );
}

export default App;
