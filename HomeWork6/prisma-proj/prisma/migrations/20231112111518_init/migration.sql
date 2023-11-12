-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "last_name" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locker" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "Locker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubCard" (
    "id" SERIAL NOT NULL,
    "valid_until" TIMESTAMP(3) NOT NULL,
    "client_id" INTEGER NOT NULL,
    "visit_mode_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClubCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitMode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "VisitMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceInClubCard" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "club_card_id" INTEGER NOT NULL,

    CONSTRAINT "ServiceInClubCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Locker_code_key" ON "Locker"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Locker_client_id_key" ON "Locker"("client_id");

-- AddForeignKey
ALTER TABLE "Locker" ADD CONSTRAINT "Locker_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCard" ADD CONSTRAINT "ClubCard_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCard" ADD CONSTRAINT "ClubCard_visit_mode_id_fkey" FOREIGN KEY ("visit_mode_id") REFERENCES "VisitMode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceInClubCard" ADD CONSTRAINT "ServiceInClubCard_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceInClubCard" ADD CONSTRAINT "ServiceInClubCard_club_card_id_fkey" FOREIGN KEY ("club_card_id") REFERENCES "ClubCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
