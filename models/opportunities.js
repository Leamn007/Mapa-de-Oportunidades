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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    // Opportunities.associate = (models) => {
    //     Opportunities.hasOne(models.OpportunityTypes);
    //     Opportunities.hasOne(models.Categories);
    //     Opportunities.hasOne(models.Institutions);
    // };

    Opportunities.associate = (models) => {
        Opportunities.belongsTo(models.Categories);
        Opportunities.belongsTo(models.OpportunityTypes);
        Opportunities.belongsTo(models.Institutions);
    };

    return Opportunities;
};