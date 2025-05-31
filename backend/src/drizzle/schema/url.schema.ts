import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const url = pgTable('url', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  code: text('code').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
