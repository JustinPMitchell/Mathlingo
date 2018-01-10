'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    query: DataTypes.TEXT,
    correctsolution: DataTypes.TEXT,
    topicId: DataTypes.INTEGER
  });
  question.associate = function (models) {
    models.question.belongsTo(models.topic);
    models.question.hasMany(models.answer);
  };
  return question;
};


