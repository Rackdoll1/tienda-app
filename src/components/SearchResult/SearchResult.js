import { useContext } from "react";
import { AppContext } from "../../services/resultadosBusqueda";

import Card from "../Card/Card";

const SearchResult = () => {

  const [state, setState] = useContext(AppContext);

  return(
    <>
      { state.length > 0 ?
        <div id="container" className="container">
            {
                state.map((card, index)=>{
                   return(
                       <Card item={card} key={`${card.product_name}${index}`}/>
                   )
               })
            }
        </div>
      : <div className="container-no-results">
          <h3>Lo sentimos! No contamos con ese producto por el momento.</h3>
          <p>Intente buscar otro producto :)</p>
        </div>
    }
    </>
  )
}


export default SearchResult;
