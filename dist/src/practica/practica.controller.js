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
exports.PracticaController = void 0;
const common_1 = require("@nestjs/common");
const practica_service_1 = require("./practica.service");
const swagger_1 = require("@nestjs/swagger");
let PracticaController = class PracticaController {
    constructor(practicaService) {
        this.practicaService = practicaService;
    }
    getLetra(id) {
        return this.practicaService.getLetraById(id);
    }
    getPalabra(id) {
        return this.practicaService.getPalabraById(id);
    }
    getIdsLetras() {
        return this.practicaService.getIdsLetras();
    }
    getIdsPalabras() {
        return this.practicaService.getIdsPalabras();
    }
};
exports.PracticaController = PracticaController;
__decorate([
    (0, common_1.Get)('letra/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "getLetra", null);
__decorate([
    (0, common_1.Get)('palabra/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "getPalabra", null);
__decorate([
    (0, common_1.Get)('letras/ids'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "getIdsLetras", null);
__decorate([
    (0, common_1.Get)('palabras/ids'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "getIdsPalabras", null);
exports.PracticaController = PracticaController = __decorate([
    (0, common_1.Controller)('practica'),
    (0, swagger_1.ApiTags)('Practicas'),
    __metadata("design:paramtypes", [practica_service_1.PracticaService])
], PracticaController);
//# sourceMappingURL=practica.controller.js.map