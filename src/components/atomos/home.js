
const Home = ({data}) => {

  const firstTwentyItems = data.map((item, index) => {
    if(index < 20) {
      return (
        <>
          <img src={item?.image} alt={item?.product_name} />
          <h2>{item?.product_name}</h2>
          <h2>{item?.price}</h2>
          <h2>{item?.brand}</h2>
        </>
      )
    }
  });

  return (
    <>
      <h1>Home</h1>
      {firstTwentyItems}
    </>
  )
}

export default Home;
