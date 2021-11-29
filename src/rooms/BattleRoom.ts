import { Room, Client } from "colyseus";
import { BattleState } from "./schema/BattleState";

export class BattleRoom extends Room<BattleState> {

  onCreate(options: any) {
    this.setState(new BattleState());

    console.log(options.song);

    this.onMessage("type", (client, message) => {
      console.log("Message", message);
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
