class Discord {
    _package = require('discord.js');
    ready = false;
    events = {};
    Embed = this._package.MessageEmbed;

    constructor(token, guildId, onReady) {
        if (!token) return console.log(`DSI ERROR: token is missing`);
        this._client = new this._package.Client();
        this._guildId = guildId;
        this._loader(onReady);

        this._clientLogin(token);
    }

    setActivity(string, options) {
        this._client.user.setActivity(string, options).catch(e => console.log(`DSI ERROR: ${e}`));
    }

    renameChannel(channelId, name) {
        if (!this._client.guilds.cache.get(this._guildId).channels.cache.get(channelId)) return console.log(`DSI ERROR: channel not found`);
        this._client.guilds.cache.get(this._guildId).channels.cache.get(channelId).setName(name).catch(e => console.log(`DSI ERROR: ${e}`));
    }

    on(eventName, cb) {
        if (!eventName || !cb) return console.log(`DSI ERROR: missing argument`);
        this._client.on(eventName, cb);
    }

    _clientLogin(token) {
        this._client.login(token).catch(e => console.log(`DSI ERROR: ${e}`));
    }

    _loader(onReady) {
        this._client.on("ready", () => {
            this.ready = true;
            if (onReady) onReady(this._client);
        });
        let Events = require('./core/events.js');
        this.events = new Events(this._guildId, this._client);
    }
}

module.exports = Discord;