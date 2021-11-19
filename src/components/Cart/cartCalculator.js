
const cartCalculator = (cartstate) => {


      let sum1 = 0;
      cartstate.map(item => {
         sum1 += Number(item.itemInfo.price) * Number(item.counter);
      })

      return sum1;
    }

export {
  cartCalculator
}
