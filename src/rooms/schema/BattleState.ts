import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "./Player";

export class BattleState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();

  createPlayer(id: string) {
    let player = new Player();
    this.players.set(id, player);

    return player;
  }

  removePlayer(id: string) {
    this.players.delete(id);
  }
}
