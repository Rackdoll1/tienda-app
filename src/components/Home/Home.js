import React,{useEffect,useState} from "react"
import Card from "../Card/Card"
import withItemsHome from "../Hoc/withItemsHome"
const Home=(data)=>{
const[image,setImage]=useState("")
const[product_name,setProduct_name]=useState("")
const[price,setPrice]=useState("")
const[brand,setBrand]=useState("")
const[category,setCategory]=useState("")
let homeData= data.data
console.log(homeData)

const cards=()=>{
    if(homeData.length===20){
    for (let i = 0; i < homeData.length; i++) {
        setImage(homeData[i].image)
        setProduct_name(homeData[i]?.product_name)
        setPrice(homeData[i].price)
        setBrand(homeData[i].brand)
        setCategory(homeData[i].category)
        console.log("hola")
    }}
}
const ConstructCard=()=>{
    return(
        <Card
        image={image}
        product_name={product_name}
        price={price}
        brand={brand}
        category={category}
        
        />
    )
}
useEffect(()=>{
ConstructCard()
},[image])

    return(
     <>
     <div id="container" className="container">
            {cards()}
     </div>
     </>
    )

}

export default withItemsHome(Home,"https://ecomerce-master.herokuapp.com/api/v1/item")