import express, { request, response } from "express";

const app = express();

app.get("/me", (request, response) => {
  return response.json({ name: "MAURICIO" });
});

app.listen(3333, () => {
  console.log("Application is running at port 3333");
});
