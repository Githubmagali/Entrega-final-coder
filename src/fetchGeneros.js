
const fetchGeneros= async()=>{
    const url =
    'https://api.themoviedb.org/3/genre/list?api_key=83243bb30b64a34797e84b2dded59fac&language=en-US';
    
    try{ //intenta hacer una peticion y luego que extraiga los datos y si todo es correcto los vamos a devolver
       const respuesta= await fetch(url); //fetch hace la peticion al servidor
       const datos= await respuesta.json(); //datos va almacenar los datos de la respuesta de json
       return datos.genres; //respuesta.json() a acceder a las peliculas, la informacion. Trabajamos con AWAIT YA QUE LOS DATOS SON ASINCRONOS 
       
    }catch(error){//atrapa el error si existe un problema
    console.log(error);
 }
    
 };
 
 export default fetchGeneros;