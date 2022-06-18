const { Schema, model } = require("mongoose");

const twitchSchema = new Schema({
    user: {
     type: String,
     required: true,
    },
    titulo: {
        type: String,
        required: true,
    }
});

module.exports = model("twitchSchema", twitch);