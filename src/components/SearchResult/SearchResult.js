import { useContext } from "react";
import { AppContext } from "../../services/resultadosBusqueda";

import Card from "../Card/Card";

const SearchResult = () => {

  const [state, setState] = useContext(AppContext);

  return(
    <>
      <div id="container" className="container">
          {
              state.map((card)=>{
                 return(
                   // <div key={`${index}${card.product_name}`}>
                     <Card item={card} />
                  // </div>
                 )
             })
          }
      </div>
    </>
  )
}


export default SearchResult;
