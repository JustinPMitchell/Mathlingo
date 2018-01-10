'use strict';
module.exports = (sequelize, DataTypes) => {
  var topic = sequelize.define('topic', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });
  topic.associate = function (models) {
    models.topic.belongsTo(models.user);
    models.topic.hasMany(models.question);
  };
  return topic;
};