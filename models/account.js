'use strict';
module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        accountId: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        securityCode: DataTypes.STRING,
        confirmed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {});
    Account.associate = function(models) {
    // associations can be defined here
    };
    return Account;
};