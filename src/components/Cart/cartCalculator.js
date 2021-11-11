// import { useContext, useState, useEffect } from "react";
// import { CartContext } from "../../services/CartContext";

const cartCalculator = (cartstate) => {

    // const [sum, setSum] = useState(0);
    //
    // const calculator = () => {

      let sum1 = 0;
      cartstate.map(item => {
         sum1 += Number(item.itemInfo.price) * Number(item.counter)
      })
      // setSum(sum1);
      return sum1;
    }

    // useEffect(() => {
    //   calculator();
    // }, [])

  // return (
  //   <>
  //     <h1>Total: ${sum}</h1>
  //   </>
  // )


// export default CardCalculator
export {
  cartCalculator
}
