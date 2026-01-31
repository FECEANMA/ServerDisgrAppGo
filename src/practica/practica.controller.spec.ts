import { Test, TestingModule } from '@nestjs/testing';
import { PracticaController } from './practica.controller';

describe('PracticaController', () => {
  let controller: PracticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticaController],
    }).compile();

    controller = module.get<PracticaController>(PracticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
