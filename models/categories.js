module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("Categories", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Categories.associate = models => {
        Categories.hasMany(models.Opportunities, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Categories;
};