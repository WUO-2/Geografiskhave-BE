/*
  Warnings:

  - You are about to drop the column `userId` on the `Badge` table. All the data in the column will be lost.
  - Added the required column `completed` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Badge` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_userId_fkey";

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "userId",
ADD COLUMN     "completed" BOOLEAN NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "imageURL" SET DEFAULT 'https://geo-api.frannoflix.xyz/assets/avatars/bird.png';

-- CreateTable
CREATE TABLE "_BadgeToUser" (
    "A" INTEGER NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToUser_AB_unique" ON "_BadgeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToUser_B_index" ON "_BadgeToUser"("B");

-- AddForeignKey
ALTER TABLE "_BadgeToUser" ADD CONSTRAINT "_BadgeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToUser" ADD CONSTRAINT "_BadgeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
