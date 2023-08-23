'use strict';

const obtenerGenero= (id, generos)=>{

    generos.forEach((elementoG)=>{
        console.log(elementoG);
    });
};

const fetchPopulares= async()=>{
   const url =
   'https://api.themoviedb.org/3/discover/movie?api_key=83243bb30b64a34797e84b2dded59fac&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
   
   try{ //intenta hacer una peticion y luego que extraiga los datos y si todo es correcto los vamos a devolver
      const respuesta= await fetch(url); //fetch hace la peticion al servidor
      const datos= await respuesta.json(); //json tae los datos. Datos va almacenar los datos de la respuesta de json
      const resultados00= datos.results; //Resultados me trae los elementos almacenos los resultados en una variable
      //const generos= await fetchGeneros();
      resultados00.forEach((elementos) => { //como los datos e sun arreglo los vamos a recorresr con un foreach
        obtenerGenero();
      });

      return resultados00; //respuesta.json() a acceder a las peliculas, la informacion. Trabajamos con AWAIT YA QUE LOS DATOS SON ASINCRONOS 
      
   }catch(error){//atrapa el error si existe un problema
      console.log(error);
}
   
};

const cargarTitulos= (resultados)=>{
   const contenedor= document.querySelector('#populares .main__grid'); //#: id
  
    resultados.forEach((resultado)=> {
        const plantilla = `
    <div class="main__media">
        <a href="#" class="main__media-thumb">
            <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
        </a>
        <p class="main__media-titulo">${resultado.title}</p>
        <p class="main__media-fecha">2021</p>
    </div>`;
        contenedor.insertAdjacentHTML('beforeend', plantilla); //insertamos la plantilla dentro del contenedor  
    }); //beforeend; la ubicamos andes del final, 

};

const cargar = async()=>{
    const resultados=await fetchPopulares();
    cargarTitulos(resultados);
};
cargar();
//# sourceMappingURL=bundle.js.map
