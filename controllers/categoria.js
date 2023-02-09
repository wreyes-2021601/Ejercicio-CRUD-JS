const { response, request } = require('express');
const Categoria = require('../models/categoria');

const getCategoria = async (req = request, res = response) => {

    const query = { estado: true };
    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query),
    ]);
    res.json({
        msg: 'GET Api de categoria',
        listaCategoria
    });

}

const postCategoria = async (req = request, res = response) => {

    const { marca, modelo, descripcion, gama } = req.body;
    const categoriaDB = new Categoria({ marca, modelo, descripcion, gama });

    await categoriaDB.save();
    res.json({
        msg: 'POST Api de categoria',
        categoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, estado, ...resto } = req.body;
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto)
    res.json({
        msg: 'PUT Api de categoria',
        categoriaEditada
    });

}



const deleteCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const categoriaEliminada = await Categoria.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE Api de Categoria',
        categoriaEliminada
    });

}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}