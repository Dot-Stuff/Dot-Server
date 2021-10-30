import { Player } from "./Player";
import { Schema, type, MapSchema } from "@colyseus/schema";

export class BattleState extends Schema {

  @type({ map: Player }) players = new MapSchema<Player>();

}
