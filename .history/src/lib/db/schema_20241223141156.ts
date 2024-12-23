import { pgTable,serial,text } from "drizzle-orm/pg-core";
import type { Project } from '../data/types';
export const myTable = pgTable("myTableName",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
})