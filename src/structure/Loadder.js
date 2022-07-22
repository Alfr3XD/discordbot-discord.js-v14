const DiscordClient = require('./DiscordClient');
const { readdirSync } = require('fs');
const { join } = require('path');

const 
DIRECTORY_DISCORDEVENTS = "../app/events/DiscordEvents",
DIRECTORY_MESSAGECOMMANDS = "../app/commands/Message",
DIRECTORY_SLASHCOMMANDS = "../app/commands/Slash"
;
class Loadder {
    /**
     * Carga a los collections los eventos de discord.js
     * @param {DiscordClient} client Cliente de discord.js extendido con los Collections de discord.js
     */
    static DiscordEvents(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, DIRECTORY_DISCORDEVENTS))
        .forEach(folders => {
            readdirSync(join(__dirname, DIRECTORY_DISCORDEVENTS, folders))
            .forEach(file => {
                const EventFile = require(join(__dirname, DIRECTORY_DISCORDEVENTS, folders, file));
                var Event;
                try { Event = new EventFile() } catch { return }
                client.discordEvents.set(Event.file, Event);
                client.on(Event.name, (...args) => Event.run(client, ...args));
                lengthFiles++;
            });
        });

        console.log(`Cargados ${lengthFiles} eventos de discord.js`);
    }
    /**
     * Cargo a los collections los comandos en mensaje de discord.js
     * @param {DiscordClient} client Cliente de discord.js extendido con los Collections de discord.js
     */
    static MessageCommands(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, DIRECTORY_MESSAGECOMMANDS))
        .forEach(folders => {
            readdirSync(join(__dirname, DIRECTORY_MESSAGECOMMANDS, folders))
            .forEach(file => {
                const CommandFile = require(join(__dirname, DIRECTORY_MESSAGECOMMANDS, folders, file));
                var Command;
                try { Command = new CommandFile() } catch { return }
                client.messageCommands.set(Command.file, Command);
                lengthFiles++;
            });
        });

        console.log(`Cargados ${lengthFiles} comandos de mensaje`);
    }
}

module.exports = Loadder;