import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DocentesService],
  controllers: [DocentesController],
  imports: [PrismaModule]
})
export class DocentesModule {}
