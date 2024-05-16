/*
  Warnings:

  - Added the required column `iconURL` to the `Poi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Poi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconURL` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Poi" ADD COLUMN     "iconURL" TEXT NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "iconURL" TEXT NOT NULL;
