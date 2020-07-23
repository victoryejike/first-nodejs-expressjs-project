"use strict";

// const { QueryInterface } = require("sequelize/types");
// const { Sequelize } = require("../models");

const columnAndTypes = [
  {
    name: "is_admin",
    type: (Sequelize) => {
      return {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      };
    },
  },
];

//Dont change it
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map((c) => {
        return queryInterface.addColumn("Users", c.name, c.type(Sequelize));
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map((c) => {
        return queryInterface.removeColumn("Users", c.name);
      })
    );
  },
};
