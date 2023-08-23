import fetchGeneros from './fetchGeneros';
import obtenerGenero from './obtenerGenero';


const fetchPopulares= async()=>{
   const url =
   'https://api.themoviedb.org/3/discover/movie?api_key=83243bb30b64a34797e84b2dded59fac&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
   
   try{ //intenta hacer una peticion y luego que extraiga los datos y si todo es correcto los vamos a devolver
      const respuesta= await fetch(url); //fetch hace la peticion al servidor
      const datos= await respuesta.json(); //json tae los datos. Datos va almacenar los datos de la respuesta de json
      const resultados00= datos.results; //Resultados me trae los elementos almacenos los resultados en una variable
      //const generos= await fetchGeneros();
      resultados00.forEach((elementos) => { //como los datos e sun arreglo los vamos a recorresr con un foreach
        obtenerGenero()
      });

      return resultados00; //respuesta.json() a acceder a las peliculas, la informacion. Trabajamos con AWAIT YA QUE LOS DATOS SON ASINCRONOS 
      
   }catch(error){//atrapa el error si existe un problema
      console.log(error);
}
   
};

export default fetchPopulares;