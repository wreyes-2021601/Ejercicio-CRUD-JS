const { response, request } = require('express');
const Categoria = require('../models/categoria');

const getCategoria = async (req = request, res = response) => {

    const query = true ;
    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query)
    ]);
    res.json({
        msg: 'Get api de categoria',
        listaCategoria: listaCategoria
    });

}

const postCategoria = async (req = request, res = response) => {

    const { marca, modelo, descripcion, gama } = req.body;
    const CategoriaDB = new Categoria({ marca, modelo, descripcion, gama });

    await CategoriaDB.save();
    res.json({
        msg: 'Post api de categoria',
        categoriaDB: CategoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, estado, ...resto } = req.body;
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto)
    res.json({
        msg: 'Put api de categoria',
        categoriaEditada: categoriaEditada
    });

}



const deleteCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const categoriaEliminada = await Categoria.findByIdAndDelete(id)

    res.json({
        msg: 'Delete api de categoria',
        categoriaEliminada: categoriaEliminada
    });

}

module.exports = {
     getCategoria,
     postCategoria,
     putCategoria,
     deleteCategoria
}