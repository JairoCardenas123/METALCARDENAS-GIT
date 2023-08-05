const url = 'http://localhost:8001/api/Catalogos/all'

export const getCatalogos = async()=>{
    try {
        const catalogos = await fetch(url);
        const datosCatalogos = await catalogos.json();
        console.log(datosCatalogos);
        return datosCatalogos; 
    } catch (error) {
        console.log(error);
    }
}

export async function insertCiclistas(data){
    try {
        const ciclistas = await fetch(`${url}`,{
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



