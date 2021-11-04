
import Card from "../Card/Card";
import withItemsData from "../../services/withItemsData";

const Home=({data})=>{
  // let Data=data.data
  // const[homeData,setHomeData]=useState([])
  // const[cards,setCards]=useState([])


  // useEffect(()=>{
  //     setHomeData(Data)
  // },[Data])
  // useEffect(()=>{
  //     homeData.map(data=>setCards(prevState=>[...prevState,data]))
  // },[homeData])

      return(
       <>
         <div id="container" className="container">
             {
                 data.map((card, index)=>{
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

export default withItemsData(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")
