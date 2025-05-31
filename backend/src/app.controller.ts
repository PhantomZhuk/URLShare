import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCodeDto } from './dto/create-url.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetCodeDto } from './dto/get-code.dto';
import { GetUrlDto } from './dto/get-url.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'get code' })
  @ApiResponse({ status: 201, type: GetCodeDto })
  @Post('getCode')
  async getUrAndCreateCode(@Body() body: CreateCodeDto) {
    return this.appService.createCode(body);
  }

  @ApiOperation({ summary: 'get url' })
  @ApiResponse({ status: 201, type: GetUrlDto })
  @Post('getUrl')
  async getUrlByCode(@Body() body: GetCodeDto) {
    return this.appService.getUrlByCode(body.code);
  }
}
