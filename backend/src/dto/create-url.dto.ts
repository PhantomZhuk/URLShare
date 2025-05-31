import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCodeDto {
  @ApiProperty({ example: 'http://localhost:5000', description: 'Url' })
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
