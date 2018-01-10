'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 32],
          msg: "Password must be between 6 and 32 characters long"
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: function(pendingUser, options) {
        if(pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.prototype.isValidPassword = function() {
    var user = this.get();
    delete user.password;
    return user;
  },
  topic.associate = function (models) {
    models.user.hasMany(models.topic);
  };
  return user;
};