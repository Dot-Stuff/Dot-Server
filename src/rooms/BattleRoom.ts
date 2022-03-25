import { Room, Client, updateLobby } from "colyseus";
import { BattleState } from "./schema/BattleState";

export class BattleRoom extends Room<BattleState> {
  onCreate(options: any) {
    if (options.password) {
      this.setPrivate();
    }

    this.setState(new BattleState());

    this.onMessage("switchSong", (client, message) => {
      this.setMetadata(message).then(() => updateLobby(this));

      this.broadcast('switchSong', message);
    });

    this.onMessage("addScore", (client, message) => {
      this.state.players.get(client.id).score += message;
    });
  }

  onJoin(client: Client, options: any)
  {
    this.state.createPlayer(client.id);
  }

  onLeave(client: Client, consented: boolean)
  {
    this.state.removePlayer(client.id);
  }

  onDispose() { }
}
