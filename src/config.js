require("dotenv").config();
const { GatewayIntentBits, Partials } = require('discord.js');

module.exports.ClientData = {
    BOT: {
        token: process.env.token,
        prefix: "?",
        devs: ["tu-id"]
    },
    GUILD: {
        id: "tu-server-id",
        channels: {},
        roles: {},
    },
    DATABASE: {}
}
module.exports.ClientOptionsData = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Message,
        Partials.Reaction,
        Partials.GuildMember,
    ]
};