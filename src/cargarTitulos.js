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

export default cargarTitulos;