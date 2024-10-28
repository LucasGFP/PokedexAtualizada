// routes/index.js
const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/PokemonController');
const TreinadorController = require('../controllers/TreinadorController');

// Rotas para Pokémon
router.post('/pokemons', PokemonController.adicionarPokemon);
router.get('/pokemons', PokemonController.listarPokemons);

// Rotas para Treinadores
router.post('/treinadores', TreinadorController.adicionarTreinador);
router.get('/treinadores', TreinadorController.listarTreinadores);

// Rota principal
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
