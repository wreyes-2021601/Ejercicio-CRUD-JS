const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Number,
        required: [true, 'El estado es obligatorio'],
    },
    
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    }
});

module.exports = model('Producto', ProductoSchema)