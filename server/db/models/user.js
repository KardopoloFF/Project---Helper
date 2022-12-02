'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Task }) {
      this.hasMany(Comment, { foreignKey: 'author' });
      this.hasMany(Comment, { foreignKey: 'addresat' });
      this.hasMany(Task, { foreignKey: 'author' });
      this.hasMany(Task, { foreignKey: 'worker' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.TEXT,
    phone: DataTypes.STRING,
    img: DataTypes.TEXT,
    isModer: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};