import { Module } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PracticaService],
  controllers: [PracticaController],
  imports: [PrismaModule]
})
export class PracticaModule {}
