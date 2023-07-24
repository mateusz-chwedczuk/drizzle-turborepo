import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { postSchema } from "./post.schema";
import { userGroupSchema } from "./user-group.schema";
 
export const userSchema = pgTable('user', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
});

export const userRelations = relations(userSchema, ({ many }) => ({
  posts: many(postSchema),
  userGroup: many(userGroupSchema)
}))