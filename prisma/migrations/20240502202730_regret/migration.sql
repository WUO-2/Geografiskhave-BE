/*
  Warnings:

  - You are about to drop the column `Status` on the `TreasureHunt` table. All the data in the column will be lost.
  - You are about to drop the column `treasureHuntId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_treasureHuntId_fkey";

-- AlterTable
ALTER TABLE "TreasureHunt" DROP COLUMN "Status";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "treasureHuntId",
ADD COLUMN     "treasureHuntStatus" "Status" NOT NULL DEFAULT 'NOT_STARTED';
