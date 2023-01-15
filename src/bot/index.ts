import type { TextChannel } from 'discord.js';
import { Message, MessageEmbed } from 'discord.js';
import { prefix, channels, client } from './bootstrap';
import { getRaidTimes } from './lib/RaidTimer';
import { getAmmoData } from './lib/AmmoInformation';
import { getProvisionData } from './lib/ProvisionInformation';
import { getMedicalData } from './lib/MedicalInformation';


client.on('ready', () => {
    console.log('ready');

    // Tarkov raid time loop, posts to #raid-timer every 5 minutes
    setInterval(async () => {
        const channel = <TextChannel>await client.channels.fetch(channels.raidTimer);

        channel.send({ embeds: [getRaidTimes({
            embed: true
        })] });
    }, 300000);
});
 
client.on('messageCreate', async (message: Message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // Tarkov raid time (!time)
    if (message.content === `${prefix}time`) {
        const data = getRaidTimes({
            embed: true
        }) as MessageEmbed;

        message.channel.send({ embeds: [data] });
    }

    // Tarkov ammo info (!ammo [name])
    if (message.content.startsWith(`${prefix}ammo`)) {
        const key = message.content.substring(
            message.content.indexOf(`${prefix}ammo`) + `${prefix}ammo`.length
        ).trim();

        const data = await getAmmoData(key, {
            embed: true
        }) as MessageEmbed;

        message.channel.send({ embeds: [data] });
    }

    // Tarkov provision info (!consume [name])
    if (message.content.startsWith(`${prefix}consume`)) {
        const key = message.content.substring(
            message.content.indexOf(`${prefix}consume`) + `${prefix}consume`.length
        ).trim();

        const data = await getProvisionData(key, {
            embed: true
        }) as MessageEmbed;

        message.channel.send({ embeds: [data] });
    }

    // Tarkov medical info (!medic [name])
    if (message.content.startsWith(`${prefix}medic`)) {
        const key = message.content.substring(
            message.content.indexOf(`${prefix}medic`) + `${prefix}medic`.length
        ).trim();

        const data = await getMedicalData(key, {
            embed: true
        }) as MessageEmbed;

        message.channel.send({ embeds: [data] });
    }
});
 
client.login((process.env.TOKEN as string));