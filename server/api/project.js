const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

//These routes are mounted on /api/project

/*
**Currently inaccessable as no admin user set up

router.get('/', async (request, response, next) => {
	try {
		response.json(await Project.findAll())
	} catch (error) {
		next(error)
	}
})
*/

//allows a user to access their projection
router.get('/:userId', async (request, response, next) => {
  if (request.user.id == request.params.userId) {
    try {
      response.json(await Project.findOne({where: {userId: request.user.id}}))
    } catch (error) {
      next(error)
    }
  } else {
    response.json("you do not have permission to access this user's projection")
  }
})

//allows a user to create a projection
router.post('/:userId', async (request, response, next) => {
  if (request.user.id == request.params.userId) {
    try {
      response.json(
        await Project.create({userId: request.user.id, ...request.body})
      )
    } catch (error) {
      next(error)
    }
  } else {
    console.log('an unauthorized user attempted a to create a projection')
  }
})

//allows a user to update their projection
router.put('/:userId', async (request, response, next) => {
  if (request.user.id == request.params.userId) {
    Project.findOne({where: {userId: request.user.id}})
      .then(project => project.update(request.body))
      .then(project => response.json(project))
      .catch(next)
  } else {
    console.log('an unauthorized user attempted a to update a projection')
  }
})
