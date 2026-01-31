"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const docentes_module_1 = require("./docentes/docentes.module");
const aulas_service_1 = require("./aulas/aulas.service");
const aulas_controller_1 = require("./aulas/aulas.controller");
const aulas_module_1 = require("./aulas/aulas.module");
const estudiante_module_1 = require("./estudiante/estudiante.module");
const practica_module_1 = require("./practica/practica.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, docentes_module_1.DocentesModule, aulas_module_1.AulasModule, estudiante_module_1.EstudianteModule, practica_module_1.PracticaModule],
        controllers: [app_controller_1.AppController, aulas_controller_1.AulasController],
        providers: [app_service_1.AppService, aulas_service_1.AulasService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map