const config = require('../config')
const { Router } = require('express')
const Article = require('../models/Article');

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')

router.post('/articles/finditweight', articlesController.finditweight)

router.post('/articles/finditsize', articlesController.finditsize)

router.post('/articles/finditstorage1', articlesController.finditstorage)

router.post('/articles/finditstorage', articlesController.finditram)

router.post('/articles/bestlaptopscompany', articlesController.bestlaptopscompany)

router.post('/articles/bestlaptopspurpose', articlesController.bestlaptopspurpose)

router.post('/articles/bestlaptopsos', articlesController.bestlaptopsos)

router.post('/articles/bestlaptops', articlesController.bestlaptops)

router.post('/articles/cheap100', articlesController.cheap100)

router.post('/articles/filtersev', articlesController.filtersev)

router.post('/articles/filtersix', articlesController.filtersix)

router.post('/articles/filterfive', articlesController.filterfive)

router.post('/articles/filterfour', articlesController.filterfour)

router.post('/articles/filterthree', articlesController.filterthree)

router.post('/articles/filterone', articlesController.filterone)

router.post('/articles/filtertwo', articlesController.filtertwo)

router.post('/articles/filterall', articlesController.filterall)

router.get('/articles/filtera', articlesController.filtera)

router.post('/articles/filter', articlesController.filter)

router.post('/articles/related', articlesController.related)

// Get All
router.get('/articles', articlesController.list)

// Get One
router.get('/articles/:id', articlesController.show)

// Create
router.post('/articles', config.isAuthenticated, articlesController.create)

// Update
router.put('/articles/:id', config.isAuthenticated, articlesController.update)

// Delete
router.delete('/articles/:id', config.isAuthenticated, articlesController.delete)

module.exports = router
