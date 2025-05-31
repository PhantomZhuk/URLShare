import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class GetUrlDto {
  @ApiProperty({ example: 1, description: 'Id' })
  @IsString()
  id: number;

  @ApiProperty({ example: 'http://localhost:5000', description: 'Url' })
  @IsUrl()
  url: string;

  @ApiProperty({ example: '314202520151', description: 'Code' })
  @IsString()
  code: string;

  @ApiProperty({ example: '314202520151', description: 'Created date' })
  @IsDate()
  createdAt: Date;
}
