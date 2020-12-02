const { argv } = require('process');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv1 = require('./config/yargs').argv1;
const colors = require('colors');


let comando = argv1._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv1.base, argv1.limite)
            .then(archivo => console.log(`${ archivo }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv1.base, argv1.limite)
            .then(archivo => console.log(`Archivo creado: ` + `${ archivo }`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// let base = 'abc';

// let argv2 = process.argv;

// console.log(argv1.base);


// let parametro = argv2[2];
// let base = parametro.split('=')[1];