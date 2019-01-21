'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Project} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'user@email.com', password: '123'}),
    User.create({email: 'accountant@email.com', password: '123'})
  ])

  const projects = await Promise.all([
    Project.create({
      userId: 1,
      currentMonth: 1,
      netIncome: 100000,
      curBonus: 200,
      totalBonus: 300,
      curDep: 400,
      curAmort: 500,
      totalDep: 50,
      totalAmort: 60,
      curIntExp: 70,
      totalIntExp: 80,
      curIntInc: 110,
      totalIntInc: 120,
      curStateTaxes: 130,
      totalStateTaxes: 800,
      curFedTaxes: 150,
      totalFedTaxes: 250,
      meals: 440,
      entertainment: 225,
      nondeductible: 25,
      penalty: 75,
      sigExp: 90,
      sigInc: 550,
      retirement: 420,
      otherEmp: 320
    }),
    Project.create({
      userId: 2,
      currentMonth: 1,
      netIncome: 50000000,
      curBonus: 20000,
      totalBonus: 30000,
      curDep: 40000,
      curAmort: 50000,
      totalDep: 5000,
      totalAmort: 6000,
      curIntExp: 7000,
      totalIntExp: 8000,
      curIntInc: 11000,
      totalIntInc: 12000,
      curStateTaxes: 13000,
      totalStateTaxes: 80000,
      curFedTaxes: 15000,
      totalFedTaxes: 25000,
      meals: 44000,
      entertainment: 22500,
      nondeductible: 2500,
      penalty: 7500,
      sigExp: 9000,
      sigInc: 55000,
      retirement: 42000,
      otherEmp: 32000
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${projects.length} projects`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
