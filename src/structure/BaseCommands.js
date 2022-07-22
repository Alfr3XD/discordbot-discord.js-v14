const Discord = require('discord.js');
const DiscordClient = require("./DiscordClient");

/** Base para comandos con prefijo en mensaje
 * @typedef {object} CommandPrefixData
 * @property {string} name Nombre del comando
 * @property {string} [description] Descripción del comando
 * @property { { subcommands: string[], example: string[], description: string[]} } [usage] Datos de uso del comando
 * @property {string[]} [aliases] Otros nombres o alias para el comando
 * @property {string} [category] Categoría del comando
 * @property {boolean} [devOnly] ¿Este comando solo puede ser usado por los desarrolladores del bot?
 * @property {string[]} [memberPermissions] Permisos necesarios para usar el comando
 * @property {string[]} [clientPermissions] Permisos necesarios para el bot
 * @property {number} [cooldown] Tiempo de cooldown del comando en segundos
 */
class BaseMessageCommand {
    /**
     * @param { CommandPrefixData } data
     */
    constructor(data) {
        this.name = data.name;
        if(data.description)        this.description        = data.description;
        if(data.usage)              this.usage              = data.usage;
        if(data.aliases)            this.aliases            = data.aliases;
        if(data.category)           this.category           = data.category;
        if(data.devOnly)            this.devOnly            = data.devOnly;
        if(data.memberPermissions)  this.memberPermissions  = data.memberPermissions;
        if(data.clientPermissions)  this.clientPermissions  = data.clientPermissions;
        if(data.cooldown)           this.cooldown           = data.cooldown;
    }

    /**
     * @param {DiscordClient} client
     * @param {Discord.Message} message
     * @param {string[]} args
     * @returns {Promise<void>}
     */
    async run(client, message, args) {}

}

/** Base para comandos con prefijo en mensaje
 * @typedef {object} CommandAppData
 * @property {string} name Nombre del comando
 * @property {string} [description] Descripción del comando
 * @property { Discord.ApplicationCommandType } [type] Tipo de dato del comando
 * @property { Discord.ApplicationCommandOptionData[] } [options] Opciones del comando
 * 
 */
class BaseAppCommand {
    /**
     * @param {CommandAppData} data 
     */
    constructor(data) {
        this.name           = data.name;
        this.description    = data.description;
        if(data.type)       this.type       = data.type;
        if(data.options)    this.options    = data.options;
    }

    /**
     * @param {DiscordClient} client
     * @param {Discord.Interaction} interaction
     */
    async run(client, interaction) {}
}

module.exports = { BaseMessageCommand, BaseAppCommand };