import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EstudianteController } from './estudiante.controller';

@Module({
  providers: [EstudianteService],
  controllers: [EstudianteController],
  imports: [PrismaModule]
})
export class EstudianteModule {}
