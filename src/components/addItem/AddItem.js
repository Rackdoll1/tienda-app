import { useState, useContext } from "react";
import { UserContext } from "../../services/userContext";

import { postItem } from "../../services/postItem";

const AddItem = () => {

    const [user, setUser] = useContext(UserContext);
    const [json, setJson] = useState({
      isActive: true,
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleInput = (e) => {
      e.preventDefault();
      if(success) {
        setSuccess(!success);
      }
      setJson({
        ...json,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setSuccess(false)
        setError(false);
         console.log(user.token);
        const result =  await postItem(json, user.token);

        if(!result) {
          setError(true);
        } else {
          setSuccess(true);
        }
    }


    return (
          <>
              <form onSubmit={handleSubmit} className="layer3">
                  <h1>Add new Item</h1>
                  <div className="form-group">
                      <label htmlFor="product_name"> Product name:</label>
                      <input className="ex" type="text" name="product_name" id="product_name" onChange={handleInput} required/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="description"> Description:</label>
                      <textarea className="ex ex-textarea" type="text" name="description" id="description" onChange={handleInput} required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="price"> Precio: $</label>
                      <input  className="ex" type="number" name="price" id="price" onChange={handleInput} required/>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="category-choices"> Category:</label>
                    <input
                      className="ex"
                      list="category-states"
                      id="category-choices"
                      name="category"
                      placeholder="Choose a category"
                      onChange={handleInput}
                      required
                    />

                  <datalist id="category-states">
                    <option value="Kids" />
                    <option value="Toys" />
                    <option value="Shoes" />
                    <option value="Computers" />
                    <option value="Grocery" />
                    <option value="Automotive" />
                    <option value="Tools" />
                    <option value="Health" />
                    <option value="Sports" />
                    <option value="Movies" />
                    <option value="Industrial" />
                    <option value="Baby" />
                    <option value="Computers" />
                    </datalist>

                  </div>
                  <div className="form-group" >
                      <label htmlFor="brand"> Brand:</label>
                      <input className="ex" type="text" name="brand" id="brand" onChange={handleInput} required />
                  </div>
                  <div className="form-group" >
                      <label htmlFor="sku"> Sku:</label>
                      <input className="ex" type="text" name="sku" id="sku" onChange={handleInput} required  placeholder="Example: 123ab23..."/>
                  </div>
                  <div className="form-group" >
                      <label htmlFor="image"> Image:</label>
                      <input className="ex" type="text" name="image" id="image" onChange={handleInput} required placeholder="Image url..."/>
                  </div>

                  <input className="submit" type="submit" value="Create Item" />
              </form>
              {error ?
              <h2 className="form-error">Your product couldn't be created. Please double check all fields and try again.</h2>
              : null}
              {success ?
              <h2 className="form-success">Success! Your new product has been created.</h2>
              : null}
          </>
    )

}

export default AddItem
