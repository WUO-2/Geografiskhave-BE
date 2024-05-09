/*
  Warnings:

  - A unique constraint covering the columns `[badgeId,userId]` on the table `BadgesOnUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BadgesOnUsers_badgeId_userId_key" ON "BadgesOnUsers"("badgeId", "userId");
