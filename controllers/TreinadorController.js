// controllers/TreinadorController.js
const Treinador = require('../models/Treinador');

let treinadores = [];

const TreinadorController = {
  adicionarTreinador(req, res) {
    const { nome, pokemons } = req.body;
    // Dividindo a string de pokemons em um array
    const pokemonArray = pokemons.split(',').map(p => p.trim());
    const treinador = new Treinador(nome, pokemonArray); // agora é um array
    treinadores.push(treinador);
    res.status(201).json(treinador);
  },
  
  listarTreinadores(req, res) {
    res.render('treinador', { treinadores });
  }
};

module.exports = TreinadorController;
