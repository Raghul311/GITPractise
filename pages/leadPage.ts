import { Page } from '@playwright/test';
import { locators } from '../locators/locators';
import { readFileSync } from 'fs';
import { join } from 'path';

export class LeadPage{

    constructor(private page: Page) {}

    async createLead(data: any){
 const leadData = JSON.parse(
  readFileSync(join(__dirname, '../data/leadData.json'), 'utf-8')
 );

//  for(const data of leadData){

  await this.page.locator(locators.createlead.companyName).fill(data.companyName);
  await this.page.locator(locators.createlead.firstName).fill(data.firstName);
  await this.page.locator(locators.createlead.lastName).fill(data.lastName);

  await this.page.selectOption(locators.createlead.dataSourceId,{value:data.dataSourceId});
  await this.page.selectOption(locators.createlead.industryEnumId,{value:data.industryEnumId});

  await this.page.locator(locators.createlead.personalTitle).fill(data.personalTitle);
  await this.page.locator(locators.createlead.countryCode).fill(data.countryCode);
  await this.page.locator(locators.createlead.phoneNumber).fill(data.phoneNumber);

  await this.page.click(locators.createlead.submitButton);

 }

}
