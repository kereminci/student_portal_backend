/*
  Warnings:

  - You are about to drop the column `email` on the `admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `admin` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Admin_email_key` ON `admin`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `email`,
    ADD COLUMN `department` VARCHAR(127) NULL,
    ADD COLUMN `name` VARCHAR(127) NULL,
    ADD COLUMN `surname` VARCHAR(127) NULL,
    ADD COLUMN `username` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(127) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Admin_username_key` ON `Admin`(`username`);
