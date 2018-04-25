module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define('UserProfile', {
        username: { type: DataTypes.STRING },
        picture: { type: DataTypes.STRING },
        karma: {type: DataTypes.INTEGER },
        description: { type: DataTypes.STRING },
        timezone: { type: DataTypes.STRING },
        language: { type: DataTypes.STRING }
    })
    return UserProfile
}
