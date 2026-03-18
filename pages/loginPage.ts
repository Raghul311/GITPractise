import { locators } from "../locators/locators";
import { Page } from "playwright-core";
import { readFileSync } from 'fs';
import { join } from 'path';

export class LoginPage {
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

async Credentials(){
        const loginData = JSON.parse(readFileSync(join(__dirname, '../data/loginData.json'), 'utf-8'));
        await this.page.goto(`http://leaftaps.com/opentaps/control/main`);
      //login page completed
    await this.page.locator(locators.createlead.username).fill(loginData.username);
    await this.page.locator(locators.createlead.password).fill(loginData.password);
    await this.page.locator(locators.createlead.loginButton).click();
    await this.page.locator(locators.createlead.crmsfa).click();

}

}