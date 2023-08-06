 import {getClientes,insertClientes,deleteClientes,editarClientes}  from "../js/API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaCatalogos();
})

const nuevoCotizaciones = document.getElementById('clientes')


async function cargaCatalogos() {
    try {
      const catalogos = await getClientes();
      console.log(catalogos);
      catalogos.forEach(catalogo =>{
        const {_id, nombre, email, direccion, celular, cedula, contactoRespaldo} = catalogo;
        nuevoCotizaciones.innerHTML +=
`
        <tr>
          <td>${nombre}</td>
          <td>${email}</td>
          <td>${direccion}</td>
          <td>${celular}</td>
          <td>${cedula}</td>
          <td>${contactoRespaldo}</td>
          <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
          <td><button type="button" class="btn btn-warning update" data-bs-toggle="modal" id="${_id}"  data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >update</button></td>


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
    const email=document.querySelector('#email').value;
    const direccion=document.querySelector('#direccion').value;
    const celular=document.querySelector('#celular').value;
    const cedula=document.querySelector('#cedula').value;
    const contactoRespaldo=document.querySelector('#contactoRespaldo').value;
    const categoria = {
        nombre,
        email,
        direccion,
        celular,
        cedula,
        contactoRespaldo,

    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return insertClientes(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}

  
const borrar=(id)=>{
    const confir = confirm("desea eliminarlo");
    if(confir){
        console.log("uno");
        deleteClientes(id);
    }
}

nuevoCotizaciones.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        editarClientes(id);
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

 const getCliente=async(id)=>{
    const data=await categoria(id);
    const {_id ,nombre ,email, direccion ,celular,cedula,contactoRespaldo} =data[0];
    console.log(data);
    console.log(CategoriaID);
    document.querySelector('#idUpdate').value = _id
    document.querySelector('#nombreUpdate').value = nombre
    document.querySelector('#emailUpdate').value = email
    document.querySelector('#direccionUpdate').value = direccion
    document.querySelector('#celularUpdate').value = celular
    document.querySelector('#cedulaUpdate').value = cedula
    document.querySelector('#contactoRespaldoUpdate').value = contactoRespaldo
}

const updateForm =document.querySelector('#formularioUpdate')

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateCli();
})

function updateCli(){
    const id = document.querySelector('#idUpdate').value;
    const nombre = document.querySelector('#nombreUpdate').value;
    const email = document.querySelector('#emailUpdate').value;
    const direccion = document.querySelector('#direccionUpdate').value;
    const celular = document.querySelector('#celularUpdate').value;
    const cedula = document.querySelector('#cedulaUpdate').value;
    const contactoRespaldo = document.querySelector('#contactoRespaldoUpdate').value;

    const cliente = {
        nombre,
        email,
        direccion,
        celular,
        cedula,
        contactoRespaldo,
    }
    console.log(cliente,id);
    if(validation1(cliente)){
        alert("Todos los campos son obligatorios")
    }else{
        return editarClientes(cliente,id)
    }

}

function validation1(obj){
    return !Object.values(obj).every(element=>element !== '')
}
 
 

