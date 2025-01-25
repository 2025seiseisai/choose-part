import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/choose-part/choose-part.html");
    await page.pause();
});
