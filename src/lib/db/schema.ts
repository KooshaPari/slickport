import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const table = pgTable('Projects', {
	id: serial().primaryKey(),
	name: text(),
	slug: text(),
	logo: text(),
	shortDescription: text(),
	description: text(),
	screenshots: text(),
	links: text(),
	color: text(),
	period: text(),
	type: text(),
	skills: text()
});
