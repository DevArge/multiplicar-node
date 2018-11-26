const fs = require('fs');
const colors = require('colors');

// const fs = require('express');
// const fs = require('../archivo');

let listarTabla = (base, limite = 10)=>{
    console.log('==================================' . green);
    console.log('=========Tabla de multipliar =====' .green);
    console.log('==================================' . green);
    
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log(data);
}

let crearArchivo =  (base, limite)=> {
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('No es un numero')
        }else{
            let data = '';
            for (let i = 1; i <=limite; i++) {
                data += `${base} * ${i} = ${base * i} \n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                else 
                    resolve(`tabla creada`)
                console.log(colors.green('El archivo ha sido creado'));
            });
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}