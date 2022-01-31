import {ICommand} from "wokcommands";
import {clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import dotenv from 'dotenv'
import {MessageEmbed} from "discord.js";

const address = 'HCSiCPy2qBaRXXAUEygDWYx8VqMiiWEUGhbkC36uJSDa'

const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed')
const publicKey = new PublicKey(address)

dotenv.config()

export default {
    category: 'balance',
    description: 'get current balance',

    callback: async ({interaction}) => {
        const embed = new MessageEmbed()
            .setFields([
                {
                    name: '__Balance__',
                    value: `**${new Intl.NumberFormat('en-IN',
                        {maximumSignificantDigits: 4})
                        .format(await getBalance())}** SOL`
                },
            ])
            .setColor('#2b647b')
        return embed
    }
} as ICommand

const getBalance = async () => {
    const lamports = await connection.getBalance(publicKey)
    return lamports / LAMPORTS_PER_SOL
}