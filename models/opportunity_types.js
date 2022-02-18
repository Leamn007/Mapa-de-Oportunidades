module.exports = (sequelize, DataTypes) => {
    const OpportunityTypes = sequelize.define("OpportunityTypes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    OpportunityTypes.associate = (models) => {
        OpportunityTypes.hasMany(models.Opportunities, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return OpportunityTypes;
};