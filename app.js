const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);
let comando = argv._[0];

switch(comando){
  case 'listar':
    listarTabla(argv.base, argv.limite)
    console.log('listar');
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado ${archivo}`))
      .catch( e => console.log(e))
    console.log('crear');
    break;
  default:
    console.log('comando no reconocido');
    
}


