import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'resources'), // carpeta resources en la raíz
      serveRoot: '/resources', // cómo se verá en la URL
    }),

    PrismaModule,
    DocentesModule,
    AulasModule,
    EstudianteModule,
    PracticaModule,
  ],
  controllers: [AppController, AulasController],
  providers: [AppService, AulasService],
})
export class AppModule {}
