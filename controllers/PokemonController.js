// controllers/PokemonController.js
const Pokemon = require('../models/Pokemon');
const Treinador = require('../models/Treinador');

let pokemons = [];  // Para armazenar pokemons
let treinadores = [];  // Para armazenar treinadores

const PokemonController = {
  adicionarPokemon(req, res) {
    const { nome, tipo, altura, peso, nivelPoder } = req.body;
    const pokemon = new Pokemon(nome, tipo, altura, peso, nivelPoder);
    pokemons.push(pokemon);
    res.status(201).json(pokemon);
  },
  
  listarPokemons(req, res) {
    res.render('pokemon', { pokemons, treinadores }); // Passando a lista de treinadores
  }
};

module.exports = PokemonController;
