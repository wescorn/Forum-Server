const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)


//Loads all the files (models) that are in this folder -> into sequelize (Except index.js, aka. this file).
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })



  //Defines associations in the Database
  db["ForumCategory"].hasMany(db["ForumSubCategory"], {foreignKey: 'category_id'});
  db["ForumSubCategory"].hasMany(db["ForumThread"], {foreignKey: 'sub_category_id'});
  db["ForumThread"].hasMany(db["ForumPost"], {foreignKey: 'thread_id'});
  db["ForumThread"].belongsTo(db["User"], {foreignKey: 'user_id'});
  db["ForumPost"].belongsTo(db["User"], {foreignKey: 'user_id'});
  db["User"].belongsTo(db["UserProfile"], {foreignKey: 'user_profile_id'});
  

  db.sequelize = sequelize
  db.Sequelize = Sequelize

module.exports = db