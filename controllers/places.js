const router = require('express').Router()

router.get('/', (req, res) => {
    let places = []
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

export default router
