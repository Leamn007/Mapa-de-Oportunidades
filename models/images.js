module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define("Images", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Images.associate = models => {
        Images.hasOne(models.Opportunities, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Images;
};