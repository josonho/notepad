const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database,config.username,config.password,{
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

var Work = sequelize.define('work',{
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  content: Sequelize.STRING(3000),
  workType: Sequelize.INTEGER(10),
  level: Sequelize.INTEGER(10),
  isComplete: Sequelize.BOOLEAN,
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  deadline: Sequelize.BIGINT,
},{
  timestamps: false
});

module.exports = Work;