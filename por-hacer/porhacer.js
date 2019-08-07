const fs= require("fs");

let listadoporhacer=[];

const guardarDB=()=>{

    let data= JSON.stringify(listadoporhacer);

    fs.writeFile("./db/data.json", data, (err)=>{

        if(err) throw new Error(`el archivo no pudo ser creado ${err}`);

        console.log("JSON generado con exito");

    });

}

const borrarTarea= (descripcion)=>{

    cargarDB();

    let index= listadoporhacer.findIndex((tarea)=>{
        if(tarea.descripcion===descripcion) return tarea;
    })

    if(index>=0){
        listadoporhacer.splice(index,1);
        console.log(listadoporhacer);
        guardarDB();
        return true;
    }else return false;

    
}

const cargarDB= () =>{

    try {
        listadoporhacer= require("../db/data.json"); //al realizar require de un JSON, lo serializa y lo combierte en objeto
    } catch (error) {
        listadoporhacer=[];
    }
    

}


let getlistado= ()=>{

    cargarDB();
    return listadoporhacer;
}

const actualizar= (descripcion, estado)=>{
    cargarDB();

    let index= listadoporhacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoporhacer[index].completado= estado;
        guardarDB();
        return true;
    }else{
        return false;
    }

    

 }


const crear= (descripcion) =>{

    cargarDB();

    let porhacer={
        descripcion: descripcion,
        completado: false
    }

    listadoporhacer.push(porhacer);

    guardarDB();

    return porhacer;

}

module.exports={
    crear: crear,
    getlistado:getlistado,
    actualizar: actualizar,
    borrarTarea: borrarTarea
}