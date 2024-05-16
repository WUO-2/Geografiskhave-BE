/*
  Warnings:

  - Added the required column `imageURL` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `info` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "imageURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "info" TEXT NOT NULL;
