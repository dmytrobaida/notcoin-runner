import vm from "vm";
import { promisify } from "util";
import puppeteer from "puppeteer";
import { exec } from "child_process";

const asyncExec = promisify(exec);

// dummy context to trick hash evaluator
const context = vm.createContext({
    window: {
        location: {
            ancestorOrigins: {},
            href: "https://clicker.joincommunity.xyz/",
            origin: "https://clicker.joincommunity.xyz",
            protocol: "https:",
            host: "clicker.joincommunity.xyz",
            hostname: "clicker.joincommunity.xyz",
            port: "",
            pathname: "/",
            search: "",
            hash: "",
        },
    },
});

export async function evalInVm(program) {
    console.log("Trying to evaluate program:", program);

    const script = new vm.Script(program);
    const ev = script.runInContext(context);

    console.log("Eval result:", program, "=", ev);

    return ev;
}

export async function randomInterval(func, min, max) {
    const time = Math.floor(Math.random() * (max - min) + min);

    // async run callback function
    await func();

    console.log("Scheduling next function with interval:", time);

    setTimeout(async () => {
        randomInterval(func, min, max);
    }, time);
}

export async function launchPuppeteer(params) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setUserAgent(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
    );

    const top = new URLSearchParams();
    top.append("tgWebAppData", params.toString());
    top.append("tgWebAppVersion", "7.0");
    top.append("tgWebAppPlatform", "ios");
    top.append(
        "tgWebAppThemeParams",
        JSON.stringify({
            secondary_bg_color: "#efeff4",
            link_color: "#007aff",
            text_color: "#000000",
            hint_color: "#8e8e93",
            header_bg_color: "#f8f8f8",
            section_header_text_color: "#6d6d72",
            section_bg_color: "#ffffff",
            destructive_text_color: "#ff3b30",
            subtitle_text_color: "#8e8e93",
            bg_color: "#ffffff",
            button_text_color: "#ffffff",
            button_color: "#007aff",
            accent_text_color: "#007aff",
        })
    );

    const url = `https://clicker.joincommunity.xyz/clicker#${top.toString()}`;

    console.log("Launching browser with url:", url);

    await page.goto(url);
    await page.evaluate(() => {
        window.Telegram.WebApp.platform = "ios";
    });

    return page;
}

export async function evalInPuppeteer(page, program) {
    console.log("Trying to evaluate program:", program);

    const ev = await page.evaluate(program);

    console.log("Eval result:", program, "=", ev);

    return ev;
}

export async function callViaCurl(options) {
    const command = getCurl(options.bearer, options.json);
    const res = await asyncExec(command);
    const parsed = JSON.parse(res.stdout);
    const hash = parsed.data[0].hash;

    console.log("Call result:", parsed.ok, hash);

    return hash;
}

function getCurl(bearer, json) {
    return `sh -x ./template.sh '${bearer}' '${JSON.stringify(json)}'`;
}

export async function callViaPuppeteer(page, options) {
    const res = await page.evaluate(async (options) => {
        try {
            const res = await fetch(
                "https://clicker-api.joincommunity.xyz/clicker/core/click",
                {
                    body: JSON.stringify(options.json),
                    headers: {
                        Accept: "application/json",
                        "Accept-Language": "en-GB,en;q=0.9",
                        auth: "6",
                        Authorization: `Bearer ${options.bearer}`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                }
            );

            return await res.json();
        } catch (e) {
            console.error("Something went wrong:", e);
        }
    }, options);

    const hash = res.data[0].hash;

    console.log("Call result:", res.ok, hash);

    return hash;
}
