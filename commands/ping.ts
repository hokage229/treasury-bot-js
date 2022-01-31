import {ICommand} from "wokcommands";

export default {
    category: 'testing',
    description: 'ping-pong',
    testOnly: true,
    slash: "both",

    callback: ({message, interaction}) => {
        if (message) {
            message.reply('hello').then()
        }
        if (interaction) {
            interaction.reply('pong').then()
        }
    }
} as ICommand