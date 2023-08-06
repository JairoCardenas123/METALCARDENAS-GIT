 import {getCatalogos,insertCatalogo}  from "../js/API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaCatalogos();
})


async function cargaCatalogos() {
    try {
      const catalogos = await getCatalogos();
      const nuevoCotizaciones = document.getElementById('cotizaciones')
      console.log(catalogos);
      catalogos.forEach(catalogo =>{
        const { nombre, descripcion, tiempo, costo} = catalogo;
        nuevoCotizaciones.innerHTML +=
`
        <tr>
          <td>${nombre}</td>
          <td>${descripcion}</td>
          <td>${tiempo}</td>
          <td>${costo}</td>
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
    const nombre=document.querySelector('#nombre').value;
    const descripcion=document.querySelector('#descripcion').value;
    const tiempo=document.querySelector('#tiempo').value;
    const costo=document.querySelector('#costo').value;
    const categoria = {
        nombre,
        descripcion,
        tiempo,
        costo,
    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return insertCatalogo(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}



  
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

/* tablaClientes.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        editarCategory(id);
    }
})

const borrar=(id)=>{
    const confir = confirm("desea eliminarlo");
    if(confir){
        console.log("uno");
        deleteCategory(id);
    }
}
 */
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


