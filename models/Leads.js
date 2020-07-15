"use strict";
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define("Lead", {
    id: {
      type: DataTypes.UUID,
      defaultvalue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DtatTypes.STRING,
      allowNull: false,
    },
  });

  return Lead;
};
