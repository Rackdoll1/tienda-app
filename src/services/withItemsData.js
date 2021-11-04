// HOC para pasar info de productos

import { useState, useEffect} from 'react';
import axios from 'axios';

// función que recibe el componente al que se le pasará la info (y sus props) y una url
const withItemsData = (WrappedComponent, requestUrl) => props => {

      // guarda la info del request
      const [data, setData] = useState([]);
      // guarda el estado de la petición; si hubo error o no
      const [error, setError] = useState(Boolean);

      // si la url no es null, se realiza la petición en cuanto carga este componente
      useEffect(() => {
        if(requestUrl) {
          getData(requestUrl);
        }
      }, []);

      // petición de info a la api
      // actualmente guarda sólo los primeros 20 resultados
      const getData = async (url) => {
        setError(false);

        try {
          await axios.get(url)
            .then(response => {
              // for(let i = 0; i < 20; i++){
              //   setData(data => [...data, response.data[i]])
              // };
              setData(response.data);
            });
        }
        catch(err) {
          console.log(err);
          setData([]);
          setError(true);
        }
      };

      // Si no hay error, le agrego la información de la peticion al componente
      // En caso contrario, muestro un mensaje de error
      return (
        <>
          {!error ?
            <WrappedComponent {...props} data={data}/>
          : <h1>Ocurrió un error cargando la base de datos</h1>
          }
        </>
      )

  }

export default withItemsData;
