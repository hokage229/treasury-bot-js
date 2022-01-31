import {ICommand} from "wokcommands";
import {MessageEmbed} from "discord.js";

const address = 'HCSiCPy2qBaRXXAUEygDWYx8VqMiiWEUGhbkC36uJSDa'
const domen = 'ssjdao.sol'
const solscan = 'https://solscan.io/account/HCSiCPy2qBaRXXAUEygDWYx8VqMiiWEUGhbkC36uJSDa'


export default {
    category: 'wallet',
    description: 'get wallet info',

    callback: ({interaction}) => {
        const embed = new MessageEmbed()
            .setFields([
                {
                    name: '__Domen__',
                    value: `**${domen}**`
                },
                {
                    name: '__Address__',
                    value: `**${address}**`
                },
                {
                    name: '__Solcan__',
                    value: solscan
                },
            ])
            .setColor('#2b647b')
        return embed
    }
} as ICommand