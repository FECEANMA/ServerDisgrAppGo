import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AulasService],
  controllers: [AulasController],
  imports: [PrismaModule]
})
export class AulasModule {}
