 import {getCotizaciones,insertCotizaciones,deleteCotizaciones,oneCotizaciones,editarCotizaciones}  from "../js/API.js";

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
    }else if(e.target.classList.contains('editar')){
        const id=e.target.getAttribute('id');
        getCotizacion(id);
    }
})

const getCotizacion= async(id)=>{
    const data = await getCotizaciones(id);
    const cotizacion = data.find(cotizacion => cotizacion._id === id);
    if(cotizacion){
            const {_id ,Cliente ,Concepto, ModoDePago ,PlazoFinal,Criterios,Costo} =data[0];
            console.log(data);
            console.log(_id);
            document.querySelector('#idUpdate').value = _id
            document.querySelector('#clienteUpdate').value = Cliente
            document.querySelector('#conceptoUpdate').value = Concepto
            document.querySelector('#modoDePagoUpdate').value = ModoDePago
            document.querySelector('#plazoFinalUpdate').value = PlazoFinal
            document.querySelector('#criteriosUpdate').value = Criterios
            document.querySelector('#costoUpdate').value = Costo
    }else{
        console.log("No se encontro ningun cotizacion");
    }
    
}

function showEdit(){
    const editarCotizacionForm = document.querySelector('#formularioUpdate');
    const clienteCotizacionEdit = document.querySelector('#clienteUpdate');
    const conceptoCotizacionEdit = document.querySelector('#conceptoUpdate');
    const modoPagoCotizacionEdit = document.querySelector('#modoDePagoUpdate');
    const plazoFinalCotizacionEdit = document.querySelector('#plazoFinalUpdate')
    const criteriosCotizacionEdit = document.querySelector('#criteriosUpdate');
    const contactoRespaldo = document.querySelector('#costoUpdate');

    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const cotizacion = await oneCotizaciones(id);
            console.log(cotizacion);

            clienteCotizacionEdit.value= cotizacion.Cliente;
            conceptoCotizacionEdit.value= cotizacion.Concepto;
            modoPagoCotizacionEdit.value= cotizacion.ModoDePago;
            plazoFinalCotizacionEdit.value= cotizacion.PlazoFinal;
            criteriosCotizacionEdit.value= cotizacion.Criterios;
            contactoRespaldo.value = cotizacion.Costo

            editarCotizacionForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    Cliente: clienteCotizacionEdit.value,
                    Concepto: conceptoCotizacionEdit.value,
                    ModoDePago: modoPagoCotizacionEdit.value,
                    PlazoFinal: plazoFinalCotizacionEdit.value,
                    Criterios: criteriosCotizacionEdit.value,
                    Costo:contactoRespaldo.value,
                };
                console.log(newObject);

                if (await editarCotizaciones(id,newObject)) {
                    alert("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
/*                           window.location = 'cotizaciones.html'
 */                    });
                    
                }
            })

        });
        
    });


}  

