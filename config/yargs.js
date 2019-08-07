
const argv = require("yargs")
                .command("crear", "crea una nueva tarea", {
                    descripcion:{
                      alias: "d",
                      demand: true,
                      desc: "descripcion de la tarea"
                    }
                })
                .command("actualizar", "termina la tarea pendientes", {
                    descripcion:{
                        alias:"d",
                        demand: true,
                        desc: "descripcion de la tarea"
                    },
                    completado:{
                        alias:"c",
                        default: true,
                        desc: "marca como completado o pendientes la tarea"
                    }
                })
                .command("listar", "lista todas las tareas pendientes")
                .command("borrar", "borra una tarea especifica",{
                    descripcion:{
                        alias: "d",
                        demand: true,
                        desc: "descripcion de la tarea"
                    }
                })
                .help()
                .argv;

module.exports={
    argv:argv
}