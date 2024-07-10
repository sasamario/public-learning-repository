/*
  Warnings:

  - Added the required column `folderId` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Todos` ADD COLUMN `folderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Todos` ADD CONSTRAINT `Todos_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `Folder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
