/*
  Warnings:

  - You are about to drop the `Information` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Information";

-- CreateTable
CREATE TABLE "Docentes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aulaId" INTEGER NOT NULL,

    CONSTRAINT "Docentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aulas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "docenteId" INTEGER NOT NULL,
    "aulaId" INTEGER NOT NULL,
    "progresoGeneral" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalPracticas" INTEGER NOT NULL DEFAULT 0,
    "nivelActualId" INTEGER,
    "observacion" TEXT,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nivel" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Nivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPractica" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoPractica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Letra" (
    "id" SERIAL NOT NULL,
    "caracter" TEXT NOT NULL,
    "tipoPracticaId" INTEGER NOT NULL,

    CONSTRAINT "Letra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Palabra" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "longitud" INTEGER NOT NULL,
    "tipoPracticaId" INTEGER NOT NULL,

    CONSTRAINT "Palabra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Docentes_email_key" ON "Docentes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TipoPractica_nombre_key" ON "TipoPractica"("nombre");

-- AddForeignKey
ALTER TABLE "Docentes" ADD CONSTRAINT "Docentes_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_docenteId_fkey" FOREIGN KEY ("docenteId") REFERENCES "Docentes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_nivelActualId_fkey" FOREIGN KEY ("nivelActualId") REFERENCES "Nivel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Letra" ADD CONSTRAINT "Letra_tipoPracticaId_fkey" FOREIGN KEY ("tipoPracticaId") REFERENCES "TipoPractica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Palabra" ADD CONSTRAINT "Palabra_tipoPracticaId_fkey" FOREIGN KEY ("tipoPracticaId") REFERENCES "TipoPractica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
