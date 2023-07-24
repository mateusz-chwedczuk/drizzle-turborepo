import { DbService } from "@acme/db";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly db: DbService) {}

  @Get()
  healthCheck() {
    return "";
  }
}
