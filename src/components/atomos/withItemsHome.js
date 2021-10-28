// HOC para pasarle info de productos al home

import { useState, useEffect} from 'react';
import axios from 'axios';

// función que recibe el componente al que se le pasará la info y una url
const withItemsHome = (WrappedComponent, requestUrl) => props => {

      // guarda la info del request
      const [data, setData] = useState([]);
      const [error, setError] = useState(Boolean);

      // si la url no es null, se realiza la petición
      useEffect(() => {
        if(requestUrl) {
          getData(requestUrl);
        }
      }, []);

      // petición de info a la api
      const getData = async (url) => {
        setError(false);

        try {
          await axios.get(url)
            .then(response => setData(response.data));
        }
        catch(err) {
          console.log(err);
          setData([]);
          setError(true);
        }
      };

      // le agrego la info de la petición al componente que recibí originalmente
      return (
        <>
          {!error ?
            <WrappedComponent {...props} data={data} />
          : <h1>Ocurrió un error cargando la base de datos</h1>
          }

        </>
      )

  }

export default withItemsHome;
