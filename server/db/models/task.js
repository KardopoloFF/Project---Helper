'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, User }) {
      this.hasMany(Category, { foreignKey: 'categoryId' })
      this.belongsTo(User, { foreignKey: 'author' })
      this.belongsTo(User, { foreignKey: 'worker' })
    }
  }
  Task.init({
    geo: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
    price: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
    worker: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};