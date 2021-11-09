
import Card from "../Card/Card";
import withItemsData from "../../services/withItemsData";

const Home=({data})=>{


      return(
       <>
         <div id="container" className="container">
             {
                 data.map((card)=>{
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

export default withItemsData(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")
