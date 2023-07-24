import { relations } from "drizzle-orm";
import { foreignKey, integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { groupSchema } from "./group.schema";
import { userSchema } from "./user.schema";

export const userGroupSchema = pgTable("user_group", {
  groupId: integer("group_id").notNull(),
  userId: integer("user_id").notNull().references(() => userSchema.id),
}, (t) => ({
  pk: primaryKey(t.groupId, t.userId),
  groupFk: foreignKey({ columns: [t.groupId], foreignColumns: [groupSchema.id]}),
  userFk: foreignKey({ columns: [t.userId], foreignColumns: [userSchema.id]}),
}));

export const userGroupRelations = relations(userGroupSchema, ({ one }) => ({
  group: one(groupSchema, {
    fields: [userGroupSchema.groupId],
    references: [groupSchema.id]
  }),
  user: one(userSchema, {
    fields: [userGroupSchema.userId],
    references: [userSchema.id]
  })
}))