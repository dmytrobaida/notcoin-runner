import fs from "fs";
import * as curlconverter from "curlconverter";

import {
    randomInterval,
    evalInPuppeteer,
    launchPuppeteer,
    callViaPuppeteer,
} from "./utils.js";

// next hash evaluated by program to confirm its a browser
let nextHash = null;

const request = fs.readFileSync("request.sh").toString("utf8");
const reqJson = JSON.parse(curlconverter.toJsonString(request));
const bearer = reqJson.headers["Authorization"].split(" ")[1];
const params = new URLSearchParams(reqJson.data["webAppData"]);

function getOptions(count) {
    const options = {
        bearer: bearer,
        json: {
            count: count,
            webAppData: params.toString(),
        },
    };

    if (nextHash != null) {
        options.json.hash = nextHash;
    }

    return options;
}

async function runFaker(page, count) {
    if (count > 160) {
        console.log("Count is too big");
    }

    console.log("Running request with count:", count);

    try {
        const hash = await callViaPuppeteer(page, getOptions(count));
        const program = hash.map((s) => atob(s)).join("+");

        nextHash = await evalInPuppeteer(page, program);
    } catch (e) {
        console.error("Something went wrong:", e);
    }
}

async function main() {
    const page = await launchPuppeteer(params);

    randomInterval(
        async () => {
            // random count between 100 and 160
            const count = Math.floor(Math.random() * 60) + 100;

            try {
                await runFaker(page, count);
            } catch (e) {
                console.error("Something went wrong:", e);
            }
        },
        10000,
        15000
    );
}

main();
