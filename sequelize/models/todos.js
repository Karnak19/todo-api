const Sequelize = require("sequelize");
const sequelize = require("../index");

const Todo = sequelize.define(
  "Todo",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isDone: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {}
);

module.exports = Todo;
