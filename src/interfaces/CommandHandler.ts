import { CommandInteraction } from "discord.js";

export type CommandHandler = (interaction: CommandInteraction) => Promise<void>;
