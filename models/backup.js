const { prefix } = require("../settings/config.json");
const { Schema, model } = require("mongoose");

const schema = new Schema({
  GuildID: {
    type: String,
  },
  Prefix: {
    type: String,
    default: prefix,
  },
});

module.exports = model("guild_settings", schema);