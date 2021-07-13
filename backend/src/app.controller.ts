import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Route } from './models/route';

@Controller('routes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoutes(): Route[] {
    return this.appService.getRoutes();
  }
}
