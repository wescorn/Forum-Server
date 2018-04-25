module.exports = (sequelize, DataTypes) => {
    const ForumPost = sequelize.define('ForumPost', {
        title: { type: DataTypes.STRING },
        content: { type: DataTypes.STRING },
        date: { type: DataTypes.DATE },
    }
    )
    return ForumPost
}
