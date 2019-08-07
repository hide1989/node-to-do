const argv = require("./config/yargs.js").argv;
const porhacer = require("./por-hacer/porhacer.js");

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea=porhacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    
    case "listar":
        let listado = porhacer.getlistado();
        for(let tarea of listado){
            console.log("========Por Hacer========");
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log("=========================");
        }
    break;

    case "actualizar":
        let actualizado= porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case "borrar":
        let borrado= porhacer.borrarTarea(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log("comando no es reconocido");
    break;
}