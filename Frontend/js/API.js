/*  const urlCatalogos = "http://localhost:8001/api/Catalogos"
 */ const urlCotizaciones = "http://localhost:8003/api/Cotizaciones"
const urlClientes = "http://localhost:8003/api/Clientes"

/* export const getCatalogos = async()=>{
    try {
        const catalogos = await fetch(urlCatalogos);
        const datosCatalogos = await catalogos.json();
        console.log(datosCatalogos);
        return datosCatalogos; 
    } catch (error) {
        console.log(error);
    }
} */

// ? ------------------------ CATEGORIAS API --------------------------------


export async function getCotizaciones(){
    try {
        const cotizaciones = await fetch(`${urlCotizaciones}/all`)
        return cotizaciones.json()
    } catch (error) {
        console.log(error);
        
    }
}


export async function getClientes(){
    try {
        const clientes = await fetch(`${urlClientes}/all`)
        return clientes.json()
    } catch (error) {
        console.log(error);
        
    }
}

export const insertClientes = async(catalogo)=>{
    try {
        await fetch(`${urlClientes}/add`,{
            method:'POST',
            body:JSON.stringify(catalogo),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "clientes.html"
    } catch (error) {
        console.log(error);
    }
}



export const insertCotizaciones = async(catalogo)=>{
    try {
        await fetch(`${urlCotizaciones}/add`,{
            method:'POST',
            body:JSON.stringify(catalogo),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "cotizaciones.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteClientes = async (id) => {
    try {
        await fetch(`${urlClientes}/del/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'clientes.html'
   } catch (error) {
        console.log(error);
    }
};

export const deleteCotizaciones = async (id) => {
    try {
        await fetch(`${urlCotizaciones}/del/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'cotizaciones.html'
   } catch (error) {
        console.log(error);
    }
};


export async function oneClientes(id){
    try {
        const clientes = await fetch(`${urlClientes}/one/${id}`);
        console.log(clientes);
        return clientes.json();
        
    } catch (error) {
        console.log(error);
    }
}

export async function oneCotizaciones(id){
    try {
        const cotizaciones = await fetch(`${urlCotizaciones}/one/${id}`);
        console.log(cotizaciones);
        return cotizaciones.json();
        
    } catch (error) {
        console.log(error);
    }
}





export const editarClientes = async (_id,cliente) => {
    try {
        await fetch(`${urlClientes}/upd/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(cliente), // Aquí se envía el objeto cliente en el cuerpo de la solicitud
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "clientes.html"
    } catch (error) {
        console.log(error);
    }
};


export const editarCotizaciones = async (_id,cliente) => {
    try {
        await fetch(`${urlCotizaciones}/upd/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(cliente), // Aquí se envía el objeto cliente en el cuerpo de la solicitud
            headers: {
                'Content-Type': 'application/json'
            }
        });
     window.location.href = "cotizaciones.html"
     } catch (error) {
        console.log(error);
    }
};

 

/* export const obtenerCategory = async (id) => {
 
};

*/



