import DiscordJS, {Intents} from 'discord.js';
import 'dotenv/config'
import path from 'path'
import WOKCommands from "wokcommands";
import mongoose from 'mongoose'
import testSchema from "./test-schema";

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`)

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['936725913763213362'],
    })
})

client.login(process.env.TOKEN)