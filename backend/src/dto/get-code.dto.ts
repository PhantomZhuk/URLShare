import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class GetCodeDto {
  @ApiProperty({ example: '314202520151', description: 'Code' })
  @IsNotEmpty()
  code: string;
}
