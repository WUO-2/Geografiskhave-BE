/*
  Warnings:

  - Added the required column `treasureHuntId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'FINISHED');

-- AlterTable
ALTER TABLE "TreasureHunt" ADD COLUMN     "Status" "Status" NOT NULL DEFAULT 'NOT_STARTED';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "treasureHuntId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_treasureHuntId_fkey" FOREIGN KEY ("treasureHuntId") REFERENCES "TreasureHunt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
