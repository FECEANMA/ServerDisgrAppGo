"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteController = void 0;
const common_1 = require("@nestjs/common");
const create_estudiante_dto_1 = require("./dto/create-estudiante.dto");
const swagger_1 = require("@nestjs/swagger");
const estudiante_service_1 = require("./estudiante.service");
const update_estudiante_dto_1 = require("./dto/update-estudiante.dto");
let EstudianteController = class EstudianteController {
    constructor(estudianteService) {
        this.estudianteService = estudianteService;
    }
    findAll() {
        return this.estudianteService.findAll();
    }
    findOne(id) {
        return this.estudianteService.findOne(id);
    }
    findByDocente(docenteId) {
        return this.estudianteService.findByDocenteId(docenteId);
    }
    create(dto) {
        return this.estudianteService.create(dto);
    }
    update(id, dto) {
        return this.estudianteService.update(id, dto);
    }
    remove(id) {
        return this.estudianteService.remove(id);
    }
    async sumarPractica(id) {
        return this.estudianteService.sumarPractica(id);
    }
};
exports.EstudianteController = EstudianteController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('docente/:docenteId'),
    __param(0, (0, common_1.Param)('docenteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "findByDocente", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudiante_dto_1.CreateEstudianteDto]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estudiante_dto_1.UpdateEstudianteDto]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/sumar-practica'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstudianteController.prototype, "sumarPractica", null);
exports.EstudianteController = EstudianteController = __decorate([
    (0, common_1.Controller)('estudiantes'),
    (0, swagger_1.ApiTags)('Estudiantes'),
    __metadata("design:paramtypes", [estudiante_service_1.EstudianteService])
], EstudianteController);
//# sourceMappingURL=estudiante.controller.js.map