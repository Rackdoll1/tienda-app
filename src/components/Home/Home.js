
import Card from "../Card/Card";
import withItemsData from "../../services/withItemsData";

const Home=({data})=>{


      return(
       <>
         <div id="container" className="container">
             {
                 data.map((card, index)=>{


                   if(!card.image){
                     card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"
                   }
                   return(
                      <Card item={card} key={`${card.product_name}${index}`}/>
                    )
                })
             }
         </div>
       </>
      )

}

export default withItemsData(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")
