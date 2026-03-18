import { locators } from "../locators/locators";
import { Page } from "@playwright/test";

export class HomePage{
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    async createLead(){
            await this.page.locator(locators.createlead.createLeadButton).click();
}
}