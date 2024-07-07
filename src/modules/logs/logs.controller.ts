import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { fileApiOperation } from 'src/common/docs/logs.docs';
import { LogParserResponseDto } from './dto/parser-response.dto';
import { LogsService } from './logs.service';
import { InvalidFileException } from 'src/common/exceptions/invalid-file.exception';
import { RankingResponseDto } from './dto/ranking-response.dto';
import { checkFileFormat } from 'src/helpers/checkFileFormat';

@ApiTags('logs')
@Controller({
  path: 'logs',
  version: '1',
})
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @ApiCreatedResponse({
    status: 201,
    description: 'Parser de arquivo de log do Quake',
  })
  @ApiUnprocessableEntityResponse({
    status: 422,
    description: 'Formato de arquivo inválido',
  })
  @Post('/parse')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation(fileApiOperation)
  @ApiConsumes('multipart/form-data')
  parse(@UploadedFile() file: Express.Multer.File): LogParserResponseDto {
    const isValidFile = checkFileFormat(file.originalname);
    if (!isValidFile) {
      throw new InvalidFileException('Arquivo inválido. Somente logs do Quake (.log) são aceitos.');
    }
    return this.logsService.parse(file);
  }

  @ApiCreatedResponse({
    status: 200,
    description: 'Ranking dos jogadores por kills',
  })
  @ApiUnprocessableEntityResponse({
    status: 422,
    description: 'Formato de arquivo inválido',
  })
  @Post('/ranking')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation(fileApiOperation)
  @ApiConsumes('multipart/form-data')
  ranking(@UploadedFile() file: Express.Multer.File): RankingResponseDto {
    const isValidFile = checkFileFormat(file.originalname);
    if (!isValidFile) {
      throw new InvalidFileException('Arquivo inválido. Somente logs do Quake (.log) são aceitos.');
    }
    return this.logsService.getRanking(file);
  }
}
