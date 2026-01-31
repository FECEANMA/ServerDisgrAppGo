import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Crear un aula
  const aula = await prisma.aulas.create({
    data: {
      nombre: '2do Básica A',
    },
  });

  // 2️⃣ Crear un docente asociado al aula
  const docente = await prisma.docentes.create({
    data: {
      nombre: 'María',
      apellido: 'González',
      email: 'maria.gonzalez@escuela.com',
      password: '123456', // ⚠️ luego deberías hashearla
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
