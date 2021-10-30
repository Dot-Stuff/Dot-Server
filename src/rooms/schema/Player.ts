import { Schema, type } from "@colyseus/schema";

export class Player extends Schema {
    @type("boolean")
    left = false;

    @type("boolean")
    right = false;

    @type("boolean")
    up = false;

    @type("boolean")
    down = false;
}
