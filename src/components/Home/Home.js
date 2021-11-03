import React,{useEffect,useState} from "react"
import Card from "../Card/Card"
import withItemsHome from "../Hoc/withItemsHome"
const Home=(data)=>{
let Data=data.data
const[homeData,setHomeData]=useState([])
const[cards,setCards]=useState([])


useEffect(()=>{
    setHomeData(Data)
},[Data])
useEffect(()=>{
    homeData.map(data=>setCards(prevState=>[...prevState,data]))
},[homeData])

    return(
     <>
     <div id="container" className="container">
         {
             cards.map(card=>{
                 if(card.product_name===card.p){
                     return null
                 }
                 else{
                        return(
                            <Card
                            id={card.product_name}
                            key={card.id}
                            image={card.image}
                            product_name={card.product_name}
                            price={card.price}
                            brand={card.brand}
                            category={card.category}
                            />
                        )}
             })
         }
     </div>
     </>
    )

}

export default withItemsHome(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")