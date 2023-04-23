const express = require('express');
const router = express.Router();
const api = require('../package/pokemons')

router.get('/', async (req, res) => {
    ob = await api.pokemons();
    res.render("home/home", { ob })
})

router.get('/info/:url', async (req, res) => {
    ob = await api.pokemon(req.params.url);
    res.render("info/infoPokemon", { ob })
})

module.exports = router;
