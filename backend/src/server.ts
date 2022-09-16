import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { convertHourToMinutes } from "./utils/convertHourToMinutes";
import { convertMinutesToHourString } from "./utils/convertMinutesToHourString";

const app = express();
app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    where: { gameId },
    select: {
      id: true,
      name: true,
      HourEnd: true,
      hourStart: true,
      yearsPlaying: true,
      useVoiceChannel: true,
      weekDays: true,
      discord: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedData = ads.map((ad) => ({
    ...ad,
    weekDays: ad.weekDays.split(","),
    HourEnd: convertMinutesToHourString(ad.HourEnd),
    hourStart: convertMinutesToHourString(ad.hourStart),
  }));

  return response.json(formattedData);
});

app.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const {
    name,
    HourEnd,
    hourStart,
    yearsPlaying,
    useVoiceChannel,
    weekDays,
    discord,
  } = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name,
      HourEnd: convertHourToMinutes(HourEnd),
      hourStart: convertHourToMinutes(hourStart),
      yearsPlaying,
      useVoiceChannel,
      weekDays: weekDays.join(","),
      discord,
    },
  });

  return response.json(ad);
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: { discord: true },
    where: { id: adId },
  });

  return response.json(ad);
});

app.listen(3333, () => {
  console.log("Application is running at port 3333");
});
