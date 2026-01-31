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
exports.DocentesController = void 0;
const common_1 = require("@nestjs/common");
const docentes_service_1 = require("./docentes.service");
const create_docente_dto_1 = require("./dto/create-docente.dto");
const update_docente_dto_1 = require("./dto/update-docente.dto");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./dto/login.dto");
let DocentesController = class DocentesController {
    constructor(docentesService) {
        this.docentesService = docentesService;
    }
    findAll() {
        return this.docentesService.findAll();
    }
    findOne(id) {
        return this.docentesService.findOne(id);
    }
    create(dto) {
        return this.docentesService.create(dto);
    }
    update(id, dto) {
        return this.docentesService.update(id, dto);
    }
    async login(dto) {
        const docente = await this.docentesService.findByEmail(dto.email);
        if (!docente || docente.password !== dto.password) {
            throw new common_1.UnauthorizedException('Correo o contraseña incorrectos');
        }
        return {
            id: docente.id,
            nombre: docente.nombre,
            apellido: docente.apellido,
            email: docente.email,
            aula: docente.aula,
        };
    }
};
exports.DocentesController = DocentesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocentesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocentesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docente_dto_1.CreateDocenteDto]),
    __metadata("design:returntype", void 0)
], DocentesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_docente_dto_1.UpdateDocenteDto]),
    __metadata("design:returntype", void 0)
], DocentesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "login", null);
exports.DocentesController = DocentesController = __decorate([
    (0, common_1.Controller)('docentes'),
    (0, swagger_1.ApiTags)('Docentes'),
    __metadata("design:paramtypes", [docentes_service_1.DocentesService])
], DocentesController);
//# sourceMappingURL=docentes.controller.js.map