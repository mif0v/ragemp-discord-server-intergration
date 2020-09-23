# Installation

1. Install the npm package [discord.js](https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------) v12.
2. Move the "discord" folder to the server part.
3. Import "index.js" from the just transferred folder using "require", by binding it to a variable.

# Using

> You can see examples of use in "example.js".

The first thing you need to do is to call in the imported class constructor and pass the arguments there:
   1. Token Bot | String
   2. Guild ID | String
   3. Callback, which will trigger when the bot is ready, which is transmitted to the discord client. | Function (can be skipped).
   
For convenience, you can link to a global variable.
   
## Main

#### Method - setActivity

> Sets bot status

_Required Arguments_

* text (String): The text to be displayed in the status of the bot profile.
* options (Object): Options for status, [more details](https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity).

#### Method - renameChannel

> Renames the discord channel

* channelId (String): The channel id from which you want to change your name.
* name (String): New name for the channel.

#### Method - on

> Copy of the method from discord.js - Client.on

#### Param - ready

> Shows whether the bot has started or not

_Return Value_
* Boolean

#### Param - Embed

> Copy of [MessageEmbed](https://discordjs.guide/popular-topics/embeds.html) class from discord.js package

_Return Value_
* Class

## Events

#### Method - events.add

> Creates a new event

_Required Arguments_

* eventName (String): Key event.
* channelId (String): ID of the channel to which the event will be linked.
* active (Boolean): If false, does not perform the event, standard true.

#### Method - events.addList

> Creates several events

_Required Arguments_

* The list consisting of objects must contain eventName (String), channelId (String), active (Boolean) standard true.

#### Method - events.remove

> Removes the event

_Required Arguments_

* eventName (String): Key event.

#### Method - events.exist

> Checks whether a given event exists

_Required Arguments_

* eventName (String): Key event.

#### Method - events.setActive

> Sets whether or not the event is active

_Required Arguments_

* eventName (String): Key event.
* toggle (Boolean)

#### Method - events.isActive

> Returns whether the event is active or not.

_Required Arguments_
* eventName (String): Key event.

_Return Value_
* Boolean

#### Method - events.get

> Returns an object that contains events and their parameters.

_Return Value_
* Object

#### Method - events.call

> Calls up the specified event by performing the transferred action.

_Required Arguments_
* eventName (String): Key event.
* action (List || Callback): A list consisting of string values and embeds or callback to which the "client" and "channel" are transmitted.







