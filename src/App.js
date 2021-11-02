// own components
import withItemsHome from "./components/atomos/withItemsHome";
import Home from "./components/atomos/home";

import './App.css';
// own scss styles
import "./styles/organismos/organismos.scss"

const URL = "https://ecomerce-master.herokuapp.com/api/v1/";
const EnhancedHome = withItemsHome(Home, `${URL}item`);


function App() {
  return (
    <>
      <EnhancedHome />
    </>


  );
}

export default App;
