-- CreateTable
CREATE TABLE "Poi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Poi_pkey" PRIMARY KEY ("id")
);
