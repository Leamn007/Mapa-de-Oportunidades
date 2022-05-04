module.exports = (sequelize, DataTypes) => {
    const Opportunities = sequelize.define("Opportunities", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Opportunities.associate = (models) => {
        Opportunities.belongsTo(models.Categories);
        Opportunities.belongsTo(models.OpportunityTypes);
        Opportunities.belongsTo(models.Institutions);
        Opportunities.belongsTo(models.Images);
    };

    return Opportunities;
};