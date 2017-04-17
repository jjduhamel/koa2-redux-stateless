import glob from "glob-all";
import path from "path";

import debug from "../debug";
import db from "../database";

const files = glob.sync(path.join(__dirname, "./**/*.model.js"));
var models = {};

for (var j=0; j<files.length; j++) {
  let file = files[j];
  debug("Import File: %s", file);
  let model = db.import(file);
  models[model.name] = model;
}

for (var key in models) {
  let model = models[key];
  if (model.associate) {
    debug("Associate Model: %s", model.name);
    model.associate(models);
  }
}

module.exports = models;
