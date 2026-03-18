import { test } from "@playwright/test";
test(`Amazon login`,async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.fill("#userEmail","raghulkumar311@gmail.com");
    await page.fill("#userPassword","Raghul@8223");
    await page.click("#login");
    await page.waitForLoadState("networkidle");
    const phone= await page.locator(`.card-body b`).allTextContents();
    console.log(phone);
    
})