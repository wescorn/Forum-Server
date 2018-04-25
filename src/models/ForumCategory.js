
module.exports = (sequelize, DataTypes) => {
  const ForumCategory = sequelize.define('ForumCategory', {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE }
  })

  return ForumCategory
}
