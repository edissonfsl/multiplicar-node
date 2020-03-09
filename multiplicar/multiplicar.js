const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`========== Tabla del ${ base } ===========`.magenta);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.green);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La valor de la base (${base}) ingresada no es un número`);
            return;
        }


        let data = '';

        data += `>> Tabla de ${ base } \n`;
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i } \n`);
        }

        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);

            resolve(colors.green(`tabla-${ base }-al-${ limite }.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}