const urlCatalogos = "http://localhost:8001/api/Catalogos"

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


export async function getCatalogos(){
    try {
        const ciclistas = await fetch(`${urlCatalogos}/all`)
        return ciclistas.json()
    } catch (error) {
        console.log(error);
        
    }
}



export const insertCatalogo = async(catalogo)=>{
    try {
        await fetch(`${urlCatalogos}/add`,{
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

/* export async function nuevoCatalogo(data){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await ciclistas.json();
        return response
    } catch (error) {
        console.log(error);
    }
}
 */


/* export const deleteCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
};



export const editarCategory = async (category,id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'PUT',
            body:JSON.stringify(category),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
 
};
 */


/* export const obtenerCategory = async (id) => {
 
};

*/



