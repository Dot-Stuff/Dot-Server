import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import express from "express";
import serveIndex from 'serve-index';

/**
 * Import your Room files
 */
import { BattleRoom } from "./rooms/BattleRoom";

export default Arena({
    getId: () => "Dot-Server",

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('battle', BattleRoom)
            .filterBy(['password']);

    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.use('/post', express.static('html'), serveIndex('html', { 'icons': true }))

        app.get("/", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        app.use("/colyseus", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});