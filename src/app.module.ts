import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DocentesModule } from './docentes/docentes.module';
import { AulasService } from './aulas/aulas.service';
import { AulasController } from './aulas/aulas.controller';
import { AulasModule } from './aulas/aulas.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PracticaModule } from './practica/practica.module';
@Module({
  imports: [PrismaModule, DocentesModule, AulasModule, EstudianteModule, PracticaModule],
  controllers: [AppController, AulasController],
  providers: [AppService, AulasService],
})
export class AppModule {}
