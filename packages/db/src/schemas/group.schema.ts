import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { userGroupSchema } from "./user-group.schema";

export const groupSchema = pgTable("group", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
})

export const groupRelations = relations(groupSchema, ({ many }) => ({
  userGroup: many(userGroupSchema)
}))