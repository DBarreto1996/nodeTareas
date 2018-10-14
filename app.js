
//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const tarea = require('./tareas/tareas');
const colors = require('colors');


let comando = argv._[0];

switch( comando ){
       
    case 'crear':
        let tareat = tarea.crear(argv.descripcion);
        console.log(tareat);
    break;
        
    case 'listar':
        
        let listado = tarea.getListado();
        
        for(let tar of listado){
            console.log('======Por Hacer========'.green);
            console.log(tar.descripcion);
            console.log('Estado: ', tar.completado);
            console.log('======================='.green);
            
        }
        
        
        
        console.log('Mostrar todas las tareas por hacer');
    break;
        
    case 'actualizar':
        
        let actualizado = tarea.actualizar(argv.descripcion, argv.completado);
        
        console.log(actualizado);
    break;
    case 'eliminar':
        
        let eliminado=tarea.eliminar(argv.descripcion);    
        console.log('Eliminado');
        
    break;
        
    default:
        console.log('Comando no reconocido');
       
       
}