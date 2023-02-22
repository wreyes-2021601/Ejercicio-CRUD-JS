const { response, request } = require('express');
const producto = require('../models/producto');

const getProducto = async (req = request, res = response) => {

    const query = true ;
    const listaProducto = await Promise.all([
        producto.countDocuments(query)
    ]);
    res.json({
        msg: 'Get api de producto',
        listaProducto
    });

}

const postProducto = async (req = request, res = response) => {

    const { nombre, estado, descripcion } = req.body;
    const productoDB = new producto({ nombre, estado, descripcion });

    await productoDB.save();
    res.json({
        msg: 'Post api de categoria',
        productoDB
    });

}

const putProducto = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, estado, ...resto } = req.body;
    const productoEditado = await producto.findByIdAndUpdate(id, resto)
    res.json({
        msg: 'Put api de categoria',
        productoEditado
    });

}



const deleteProducto = async (req = request, res = response) => {

    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Categoria',
        productoEliminado: productoEliminado
    });

}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}