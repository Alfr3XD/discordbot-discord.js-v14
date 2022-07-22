/** Base para eventos de discord.js */
class BaseEvent {
    /**
     * @param { { name: string, description: string } } data Datos para crear un evento de discord.js
     */
    constructor(data) {
        this.name        = data.name;
        this.description = data.description;
    }

    async run(client, ...args) {}

}

module.exports = BaseEvent;