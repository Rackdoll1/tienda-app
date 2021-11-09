import Card from "../Card/Card";
import withItemsData from "../../services/withItemsData";

const Home=({data})=>{



      return(
       <>
         <div id="container" className="container">
             {
                 data.map((card, index)=>{
                   if(!card.image){card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"}
                    return(
                      // <div key={`${index}${card.product_name}`}>

                        <Card
                        id={card.sku}
                        key={card.sku}
                        image={card.image}
                        product_name={card.product_name}
                        price={card.price}
                        brand={card.brand}
                        category={card.category}
                        Data={[card.sku,card.image,card.product_name,card.price,card.brand,card.category]}
                        />
                     // </div>
                    )
                })
             }
         </div>
       </>
      )

}

export default withItemsData(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")
