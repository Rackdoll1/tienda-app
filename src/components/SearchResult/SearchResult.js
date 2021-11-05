import { useContext } from "react";
import { AppContext } from "../../services/resultadosBusqueda";

import Card from "../Card/Card";

const SearchResult = () => {

  const [state, setState] = useContext(AppContext);

  return(
    <>
      <div id="container" className="container">
          {
              state.map((card, index)=>{
                 return(
                   // <div key={`${index}${card.product_name}`}>
                     <Card
                     id={card.product_name}
                     key={card.id}
                     image={card.image}
                     product_name={card.product_name}
                     price={card.price}
                     brand={card.brand}
                     category={card.category}
                     />
                  // </div>
                 )
             })
          }
      </div>
    </>
  )
}


export default SearchResult;
