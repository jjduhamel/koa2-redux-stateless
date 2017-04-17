import _ from "lodash";
import { seedRandom } from "../helpers/crypto";
import ACCOUNT_STATUSES, { INCOMPLETE } from "../constants/accountStatus";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserAccount', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ACCOUNT_STATUSES,
      defaultValue: INCOMPLETE
    },
    lastSignedOnAt: DataTypes.DATE,

    // Profile Info
    email: DataTypes.STRING,
    emailVerifiedAt: DataTypes.DATE,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    phoneNumberVerifiedAt: DataTypes.DATE,

    // Address Info
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    addressVerifiedAt: DataTypes.DATE,
    addressVerifiedBy: DataTypes.STRING,

    // Crypto Stuff
    passwordHash: DataTypes.STRING,
    jwtSecret: {
      type: DataTypes.STRING,
      defaultValue: () => String(seedRandom(16))
    }
  }, {
    getterMethods: {
      profile: function() {
        return _.pick(this, ["username", "email", "firstName", "lastName"]);
      },
      summary: function() {
        return _.pick(this, ["username", "status"]);
      }
    }
  });
};
