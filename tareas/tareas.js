const fs = require('fs');


let listadoTareas = [];


const guardarDB=()=>{
    let data = JSON.stringify(listadoTareas);
    
    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo guardar',err)
    });
}


const cargarDB =()=>{
    
    try{
        listadoTareas = require('../db/data.json');
        
    }catch(error){
        listadoTareas=[];
        
}
    
}


const crear = (descripcion)=>{
    
   cargarDB();
    
    let tarea={
        descripcion,
        completado: false
    };
    
    listadoTareas.push(tarea);
    guardarDB();
    return tarea;
    
}


const getListado = ()=>{
    cargarDB();
    return listadoTareas;
}


const actualizar = (descripcion,completado = true)=>{
    cargarDB();
    
    let index=listadoTareas.findIndex( tar=>{
        return tar.descripcion === descripcion;
    })
    
    if(index>=0){
        listadoTareas[index].completado= completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();
    
    let nuevoListado = listadoTareas.filter( tar =>{
        return tar.descripcion !== descripcion;
    });
    
    if(listadoTareas.length===nuevoListado.length){
        return false;
       
       }else{
           listadoTareas=nuevoListado;
           guardarDB();
           return true;
       }
    
}









module.exports={
    crear,
    getListado,
    actualizar,
    eliminar
}