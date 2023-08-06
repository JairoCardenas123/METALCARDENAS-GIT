 import {getClientes,insertClientes,deleteClientes,editarClientes,oneEquipos}  from "../js/API.js";

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
          <td><button type="button" class="btn btn-warning editar" data-bs-toggle="modal" id="${_id}"  data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >update</button></td>


        </tr>
        `;
      });   
      showEdit();
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
    }else if(e.target.classList.contains('editar')){
        const id=e.target.getAttribute('id');
        getCliente(id);
    }
})



//EDITAR CATEGORIA - CRUD (U)

const getCliente= async(id)=>{
    const data = await getClientes(id);
    const cliente = data.find(cliente => cliente._id === id);
    if(cliente){
            const {_id ,nombre ,email, direccion ,celular,cedula,contactoRespaldo} =data[0];
            console.log(data);
            console.log(_id);
            document.querySelector('#idUpdate').value = _id
            document.querySelector('#nombreUpdate').value = nombre
            document.querySelector('#emailUpdate').value = email
            document.querySelector('#direccionUpdate').value = direccion
            document.querySelector('#celularUpdate').value = celular
            document.querySelector('#cedulaUpdate').value = cedula
            document.querySelector('#contactoRespaldoUpdate').value = contactoRespaldo
    }else{
        console.log("No se encontro ningun cliente");
    }
    
}

function showEdit(){
    const editarCiclistaForm = document.querySelector('#formularioUpdate');
    const nombreCiclistaEdit = document.querySelector('#nombreUpdate');
    const edadCiclistaEdit = document.querySelector('#emailUpdate');
    const paisCiclistaEdit = document.querySelector('#direccionUpdate');
    const equipoCiclistaEdit = document.querySelector('#celularUpdate')
    const victoriasCiclistaEdit = document.querySelector('#cedulaUpdate');
    const contactoRespaldo = document.querySelector('#contactoRespaldoUpdate');

    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const ciclista = await oneEquipos(id);
            console.log(ciclista);

            nombreCiclistaEdit.value= ciclista.nombre;
            edadCiclistaEdit.value= ciclista.email;
            paisCiclistaEdit.value= ciclista.direccion;
            equipoCiclistaEdit.value= ciclista.celular;
            victoriasCiclistaEdit.value= ciclista.cedula;
            contactoRespaldo.value = ciclista.contactoRespaldo

            editarCiclistaForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    nombre: nombreCiclistaEdit.value,
                    edad: edadCiclistaEdit.value,
                    país: paisCiclistaEdit.value,
                    equipo: equipoCiclistaEdit.value,
                    victorias: victoriasCiclistaEdit.value
                };
                console.log(newObject);

                if (await editarClientes(id,newObject)) {
                    alert("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
/*                         window.location = 'clientes.html'
 */                    },1500);
                    
                }
            })

        });
        
    });


}  




/* const updateForm =document.querySelector('#formularioUpdate')

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
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

    if (validation(cliente)) {
        alert("Todos los campos son obligatorios");
    } else {
        editarClientes(id, cliente); // Aquí se pasa el ID y el objeto cliente como argumentos
    }
});
 */
 
