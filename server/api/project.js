const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

//These routes are mounted on /api/project

//this route creates a projection for specific users.
router.post('/:userId', async (req, res, next) => {
  console.log('req.user.id', req.user.id)
  console.log('req.params.userId', req.params.userId)
  if (req.user.id == req.params.userId) {
    console.log("I'm in!")
    try {
      res.json(await Project.create({where: req.body}))
    } catch (error) {
      next(error)
    }
  } else {
    console.log("I can't get in!")
  }
})

//this route is only accessible to admin users. This route allows admin users to update items on the database and returns a 200 response as updating returns a promsie for the number of rows updated and an array of the updated items if multiple items were updated.
router.put('/:itemId', async (req, res, next) => {
  try {
    const [numAffected, affected] = await Item.update(req.body, {
      where: {id: req.params.itemId},
      returning: true,
      plain: true
    })
    if (numAffected && affected) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    next(error)
  }
})
