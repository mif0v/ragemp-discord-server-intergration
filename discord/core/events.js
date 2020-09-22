class Events {
    constructor(guildId, client) {
        this._guildId = guildId;
        this._client = client;
        this._events = {};
    }

    add(eventName, channelId, active = true) {
        if (!eventName || !channelId) return console.log(`DSI ERROR: missing argument`);
        if (this._events[eventName]) return console.log(`DSI ERROR: an event with this name already exists`);
        this._events[eventName] = {channelId: channelId, active: active};
    }

    addList(list) {
        if (!(list instanceof Array)) return console.log(`DSI ERROR: the argument is not a list`);

        list.forEach(el => {
            if (!(el instanceof Object)) return console.log(`Elements on the list are not objects`);
            else if (!el["eventName"] || !el["channelId"]) {
                let i = list.indexOf(el);
                console.log(`DSI ERROR: missing value | ${i} element`)
                return;
            } else if (this._events[el["eventName"]]) return console.log(`DSI ERROR: an event with this name already exists | ${list.indexOf(el)} element`);
            else if (el["active"] === undefined) {
                el["active"] = true;
            }
            this._events[el["eventName"]] = el;
            delete this._events[el["eventName"]].eventName;
        });
    }

    exist(eventName) {
        if (!eventName || !this._events[eventName]) return console.log(`DSI ERROR: event not found`);
        return !!this._events[eventName];
    }

    remove(eventName) {
        if (!eventName || !this._events[eventName]) return console.log(`DSI ERROR: event not found`);
        delete this._events[eventName];
    }

    get() {
        return this._events;
    }

    setActive(eventName, toggle) {
        if (!eventName || !this._events[eventName]) return console.log(`DSI ERROR: event not found`);
        else if (!toggle) return console.log(`DSI ERROR: missing toggle`);
        this._events[eventName].active = toggle;
    }

    isActive(eventName) {
        if (!eventName || !this._events[eventName]) return console.log(`DSI ERROR: event not found`);
        return this._events[eventName].active;
    }

    call(eventName, action) {
        if (!eventName || !this._events[eventName]) return console.log(`DSI ERROR: event not found`);
        else if (!this._events[eventName].active) return;

        let channel = this._guild().channels.cache.get(this._events[eventName].channelId);

        if (action instanceof Function) {
            action(this._client, channel);
        } else if (action instanceof Array) {
            action.forEach(el => {
                channel.send(el).catch(e => console.log(`DSI ERROR: ${e}`));
            });
        } else {
            console.log(`DSI ERROR: unknown type of action`);
        }
    }

    _guild() {
        return this._client.guilds.cache.get(this._guildId);
    }

}

module.exports = Events;

