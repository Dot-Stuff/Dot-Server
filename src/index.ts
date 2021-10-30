import { Server } from "colyseus";
import { createServer } from "http";
import express from "express";

import { BattleRoom } from "./rooms/BattleRoom";

const port = Number(2567);

const app = express();
app.use(express.json());

const gameServer = new Server({
  server: createServer(app)
});

gameServer.define("battle", BattleRoom, { song: "bopeebo" });

gameServer.listen(port);
