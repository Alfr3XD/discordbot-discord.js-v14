const { Client, Collection, ClientOptions } = require('discord.js');
const { BaseAppCommand, BaseMessageCommand } = require('./BaseCommandS');
const BaseEvent = require('./BaseEvent');
const Loadder = require('./Loadder');

/**Clase extendida de el cliente de discord de DISCORD.JSV14*/
class DiscordClient extends Client {
    /**
     * @param {ClientOptions} options Opciones de configuración del cliente
     */
    constructor(options) {
        super(options);
        /**
         * @type {Collection<string, BaseEvent>}
         */
        this.discordEvents = new Collection()

        /**
         * @type {Collection<string, BaseMessageCommand>}
         */
        this.messageCommands = new Collection()

        /**
         * @type {Collection<string, BaseAppCommand>}
         */
        this.slashCommands = new Collection()
    }

    /**
     * @param {string} token Token de autenticación del bot de discord
     */
    StartBot(token) {
        Loadder.DiscordEvents(this);
        Loadder.MessageCommands(this);

        this.on("ready", (client) => {
            console.log(`Bot ${client.user.tag} está en linea`);
        })
        this.login(token);
    }
}

module.exports = DiscordClient;