"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const aula = await prisma.aulas.create({
        data: {
            nombre: '2do Básica A',
        },
    });
    const docente = await prisma.docentes.create({
        data: {
            nombre: 'María',
            apellido: 'González',
            email: 'maria.gonzalez@escuela.com',
            password: '123456',
            imageUrl: 'https://i.pravatar.cc/300',
            aulaId: aula.id,
        },
    });
    console.log('Aula creada:', aula);
    console.log('Docente creado:', docente);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map