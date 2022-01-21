let 
  express = require('express'),
  router = express.Router()

// hero Model
let heroSchema = require('../models/Hero')

// CREATE Hero
router.route('/create-hero').post((req, res, next) => {
  heroSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Hero
router.route('/').get((req, res, next) => {
  heroSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Hero
router.route('/edit-hero/:id').get((req, res, next) => {
  heroSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Hero
router.route('/update-hero/:id').put((req, res, next) => {
  heroSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Hero updated successfully !')
      }
    },
  )
})

// Delete Hero
router.route('/delete-hero/:id').delete((req, res, next) => {
  heroSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
