-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_treasureHuntId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "treasureHuntId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_treasureHuntId_fkey" FOREIGN KEY ("treasureHuntId") REFERENCES "TreasureHunt"("id") ON DELETE SET NULL ON UPDATE CASCADE;
