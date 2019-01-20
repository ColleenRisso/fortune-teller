const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  currentMonth: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 12
    }
  },
  netIncome: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sigInc: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  sigExp: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curDep: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curAmort: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalDep: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalAmort: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curBonus: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalBonus: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  retirement: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  otherEmp: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curIntExp: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalIntExp: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curIntInc: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalIntInc: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curStateTaxes: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalStateTaxes: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  curFedTaxes: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  totalFedTaxes: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  penalty: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  meals: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  entertainment: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  nondeductible: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Project

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
