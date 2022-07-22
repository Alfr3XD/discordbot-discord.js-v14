const DiscordClient = require('./structure/DiscordClient');
const { ClientOptionsData, ClientData } = require("./config");

const Main = new DiscordClient(ClientOptionsData);
Main.StartBot(ClientData.BOT.token);