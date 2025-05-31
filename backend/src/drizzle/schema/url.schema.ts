import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const url = pgTable('url', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  code: text('code').notNull(),
});
