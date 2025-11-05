"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airports", {
      type: "FOREIGN KEY",
      fields: ["cityId"],
      name: "City_fkey_constraint",
      references: {
        table: "Cities",
        field: "id",
      },

      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "City_fkey_constraint");
  },
};

// Need to look on this thing especially about CASCADE

/**
 * Query to check if contraint has been applied or not
 * select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME  = "airports" AND CONSTRAINT_SCHEMA = "flights";
 */
