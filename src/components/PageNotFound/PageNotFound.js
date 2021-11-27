import store from "../../assets/store.png";

const PageNotFound = () => {

  return(
    <div className="page-not-found">
      <img src={store} alt="Store"></img>
      <h1 className="page-not-found__title">Oops!</h1>
      <p className="page-not-found__paragraph">That page doesn't exist.</p>
    </div>
  )
}

export default PageNotFound
