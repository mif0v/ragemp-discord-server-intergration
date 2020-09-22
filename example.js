let token = "", // Bot token
    Package = require('./discord/index.js');

function Test() {
    // Main methods and params

    discord.setActivity("I'm online now!", {type: 'LISTENING'});

    discord.renameChannel("753738362195673118", `Online ${mp.players.length}`);

    discord.on("message", msg => {
        console.log(`New message! Content: ${msg}`);
    });

    console.log(discord.ready)

    // Methods of events

    discord.events.add("newPlayer", "753738362195673118");

    discord.events.addList([
        {
            eventName: "playerExit",
            channelId: "756661552198844586",
            active: false
        },
        {
            eventName: "newVip",
            channelId: "739210558565253120",
            active: true
        }
    ]);

    discord.events.remove("newVip");

    let eventExist = discord.events.exist("playerExit");
    console.log(eventExist);

    discord.events.setActive("playerExit", true);

    let isActive = discord.events.isActive("newPlayer");
    console.log(isActive);


    let objectOfEvents = discord.events.get();
    console.log(objectOfEvents);

    discord.events.call("playerExit", (client, channel) => {
        console.log(client.user.username);
        channel.send("Ping pong =)").catch(e => console.log(e));
    });

    discord.events.call("newPlayer", [
        "Hello, how are you?",
        new discord.Embed()
            .setColor('#fff')
            .setTitle('Hello world!')
            .setURL('https://google.com')
    ]);


}

global.discord = new Package(token, "685076145644765214", client => {
    console.log('Bot successfuly started.');

    Test();
});

