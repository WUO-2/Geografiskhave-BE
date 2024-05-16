/*
  Warnings:

  - You are about to drop the column `completed` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the `_BadgeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BadgeToUser" DROP CONSTRAINT "_BadgeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BadgeToUser" DROP CONSTRAINT "_BadgeToUser_B_fkey";

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "completed";

-- DropTable
DROP TABLE "_BadgeToUser";

-- CreateTable
CREATE TABLE "BadgesOnUsers" (
    "id" SERIAL NOT NULL,
    "badgeId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "BadgesOnUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BadgesOnUsers" ADD CONSTRAINT "BadgesOnUsers_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgesOnUsers" ADD CONSTRAINT "BadgesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
