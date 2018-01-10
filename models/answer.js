'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    solution: DataTypes.TEXT,
    questionId: DataTypes.INTEGER
  });
  answer.associate = function (models) {
    models.answer.belongsTo(models.question);
  };
  return answer;
};