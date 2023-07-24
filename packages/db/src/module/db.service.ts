import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as postgres from "postgres";

@Injectable()
export class DbService {
  private _client;

  constructor(config: ConfigService) {
    const client = postgres(config.getOrThrow<string>("DATABASE_URL"));
    this._client = drizzle(client);
  }

  get client() {
    return this._client;
  }
}