
const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'descripcion'
 }

const argv = require('yargs')
                            .command('crear','Crea una tarea por hacer', {
                                descripcion
                            }) 
                            .command('actualizar','Actualiza el estado de una tarea', {
                                descripcion,
                                completado: {
                                    default: true,
                                    alias: 'c',
                                    desc: 'Marca como completado o pendiente la tarea'
                                }
                                
                                
                            })
                            .command('eliminar','Elimina una tarea', {
                                descripcion
                                
                            })
                            .help()
                            .argv;

module.exports ={
    argv
}