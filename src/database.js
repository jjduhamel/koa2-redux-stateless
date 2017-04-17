import Sequelize from "sequelize";

import config from "../config";
const { schema, username, password, ...opts } = config.database;

const db = new Sequelize(schema, username, password, opts);

export default db;
