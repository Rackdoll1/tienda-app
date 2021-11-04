import Card from "../Card/Card"
import withItemsData from "../../services/withItemsData";

const Home=({data})=>{
  // const[image,setImage]=useState("")
  // const[product_name,setProduct_name]=useState("")
  // const[price,setPrice]=useState("")
  // const[brand,setBrand]=useState("")
  // const[category,setCategory]=useState("")
  // let homeData= data.data

  // const cards=()=>{
  //     if(homeData.length===20){
  //     for (let i = 0; i < homeData.length; i++) {
  //         setImage(homeData[i]?.image)
  //         setProduct_name(homeData[i]?.product_name)
  //         setPrice(homeData[i]?.price)
  //         setBrand(homeData[i]?.brand)
  //         setCategory(homeData[i]?.category)
  //         ConstructCard();
  //     }
  //   }
  // }

  const cards = data.map((item) => {
    return (
        <Card
          image={item?.image}
          product_name={item?.product_name}
          price={item?.price}
          brand={item?.brand}
          category={item?.category}
      />)
  });

  const cardsFiltered = cards.filter((e, i) => cards.indexOf(e) === i);
  console.log(cardsFiltered);

  // const ConstructCard=()=>{
  //     return(
  //         <Card
  //         image={image}
  //         product_name={product_name}
  //         price={price}
  //         brand={brand}
  //         category={category}
  //
  //         />
  //     )
  // }

//   useEffect(()=>{
//   ConstructCard()
// },[image])

      return(
       <>
         <div id="container" className="container">
                {cardsFiltered}
         </div>
       </>
      )

}

export default withItemsData(Home, String("https://ecomerce-master.herokuapp.com/api/v1/item"));
