import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-url.dto';
import { DRIZZLE } from './drizzle/drizzle.module';
import { DrizzleDB } from './drizzle/types/drizzle';
import { url } from './drizzle/schema/url.schema';

@Injectable()
export class AppService {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async createCode(body: CreateCodeDto) {
    const now = new Date();
    const day = String(now.getDate());
    const month = String(now.getMonth());
    const year = String(now.getFullYear());
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    const formatted = `${day}${month}${year}${hours}${minutes}${seconds}`;

    const saveInDB = await this.db
      .insert(url)
      .values({
        url: body.url,
        code: formatted,
      })
      .returning();

    if (!saveInDB) {
      throw Error('Not saved');
    }

    return formatted;
  }

  async getUrlByCode(code: string) {
    const dbUrl = await this.db.query.url.findFirst({
      where: (url, { eq }) => eq(url.code, code),
    });

    if (!dbUrl) {
      throw new NotFoundException('Url not found');
    }

    return dbUrl;
  }
}
