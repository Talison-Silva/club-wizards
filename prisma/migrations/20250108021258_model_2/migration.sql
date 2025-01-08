/*
  Warnings:

  - You are about to drop the `Serve` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Serve";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Server" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'map',
    "content" TEXT NOT NULL DEFAULT '{}',
    "ownerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Server_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Puppet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Server_code_key" ON "Server"("code");
