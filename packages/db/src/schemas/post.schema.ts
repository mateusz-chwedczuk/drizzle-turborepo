import { relations } from 'drizzle-orm';
import { date, foreignKey, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { userSchema } from "./user.schema";

export const postSchema = pgTable("post", {
  id: serial("id").primaryKey(),
  createdAt: date("created_at").defaultNow().notNull(),
  authorId: integer("author_id").notNull(),
  title: text("title").notNull(),
  content: text("content")
}, (t) => ({
  authorFk: foreignKey({ columns: [t.authorId], foreignColumns: [userSchema.id],})
}))

export const postRelations = relations(postSchema, ({ one }) => ({
  author: one(userSchema, { fields: [postSchema.authorId], references: [userSchema.id]})
}))