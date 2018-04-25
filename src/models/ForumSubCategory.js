module.exports = (sequelize, DataTypes) => {
    const ForumSubCategory = sequelize.define('ForumSubCategory', {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        date: { type: DataTypes.DATE }
    }
    )
    return ForumSubCategory
}
