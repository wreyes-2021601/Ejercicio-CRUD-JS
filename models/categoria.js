const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    marca: {
        type: String,
        required: [true, 'La marca es obligatoria']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo es obligatorio'],
    },
    
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    gama: {
        type: String,
        required: true,
        emun: ['Gama baja', 'Gama media','Gama alta']
    }
});

module.exports = model('Categoria', CategoriaSchema)
