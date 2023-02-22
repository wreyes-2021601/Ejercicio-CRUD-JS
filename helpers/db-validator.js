const Categoria = require('../models/categoria');
const Producto = require('../models/producto');

const marcaExiste = async( marca = '' ) => {
    //Verficar si el correo existe
    const existeMarca = await marca.findOne( { marca } );
    if ( existeMarca) {
        throw new Error(`La marca ${ marca }, ya esta registrado en la DB `);
    }
}

module.exports = {
    marcaExiste
}