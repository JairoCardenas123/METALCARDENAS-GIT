 import {getCotizaciones,insertCotizaciones,deleteCotizaciones}  from "../js/API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaCatalogos();
})

const nuevoCotizaciones = document.getElementById('cotizaciones')


async function cargaCatalogos() {
    try {
      const catalogos = await getCotizaciones();
      console.log(catalogos);
      catalogos.forEach(catalogo =>{
        const { _id,Cliente, Concepto, ModoDePago, PlazoFinal, Criterios, Costo} = catalogo;
        nuevoCotizaciones.innerHTML +=
`
        <tr>
          <td>${Cliente}</td>
          <td>${Concepto}</td>
          <td>${ModoDePago}</td>
          <td>${PlazoFinal}</td>
          <td>${Criterios}</td>
          <td>${Costo}</td>
          <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>

        </tr>
        `;
      });   
    } catch (error) {
      console.log(error);
    }
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formInsert=document.querySelector('#insertFormulario')

formInsert.addEventListener('submit',(e)=>{
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const Cliente=document.querySelector('#Cliente').value;
    const Concepto=document.querySelector('#Concepto').value;
    const ModoDePago=document.querySelector('#ModoDePago').value;
    const PlazoFinal=document.querySelector('#PlazoFinal').value;
    const Criterios=document.querySelector('#Criterios').value;
    const Costo=document.querySelector('#Costo').value;
    const categoria = {
        Cliente,
        Concepto,
        ModoDePago,
        PlazoFinal,
        Criterios,
        Costo,

    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return insertCotizaciones(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}

const borrar=(id)=>{
    const confir = confirm("desea eliminarlo");
    if(confir){
        console.log("uno");
        deleteCotizaciones(id);
    }
}

nuevoCotizaciones.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        editarCategory(id);
    }
})




  
/* <tr>
<th scope="row">${Cliente}</th>
<td>${Concepto}</td>
<td>${ModoDePago}</td>
<td>${PlazoFinal}</td>
<td>${Criterios}</td>
<td>${Costo}</td>
<td> <button class="btn btn-danger delete" id="${Cliente}">Delete</button></td>
<td><button type="button" class="btn btn-warning update" data-bs-toggle="modal" id="${Cliente}"  data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >update</button></td>
</tr> */



 
/* LISTAR CATEGORIAS  - CRUD (R) */





/* const formInsert=document.querySelector('#insertFormulario')

formInsert.addEventListener('submit',(e)=>{
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const CategoriaNombre=document.querySelector('#name').value;
    const Descripcion=document.querySelector('#description').value;
    const Imagen=document.querySelector('#image').value;
    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen,
    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return nuevoCatalogo(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}


 */

/* 
const insert=(e)=>{
    e.preventDefault();
    const CategoriaNombre=document.querySelector('#name').value;
    const Descripcion=document.querySelector('#description').value;
    const Imagen=document.querySelector('#image').value;
    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen,
    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return nuevaCategoria(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}
 */

/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)

/* const getCliente=async(id)=>{
    const data=await categoria(id);
    const {CategoriaID ,CategoriaNombre, Descripcion ,Imagen} =data[0];
    console.log(data);
    console.log(CategoriaID);
    document.querySelector('#idUpdate')
    document.querySelector('#CategoriaNombreUpdate')
    document.querySelector('#DescripcionUpdate')
    document.querySelector('#ImagenUpdate')

}

 */


