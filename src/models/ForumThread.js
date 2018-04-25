

module.exports = (sequelize, DataTypes) => {
    const ForumThread = sequelize.define('ForumThread', {
        title: { type: DataTypes.STRING },
        content: { type: DataTypes.STRING },
        isPoll: { type: DataTypes.BOOLEAN },
        date: { type: DataTypes.DATE },
    }
    )
    return ForumThread
}
