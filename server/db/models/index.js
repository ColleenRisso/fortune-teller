const User = require('./user')
const Project = require('./project')

//ASSOCIATIONS

Project.belongsTo(User)
User.hasOne(Project)

module.exports = {
  User,
  Project
}
