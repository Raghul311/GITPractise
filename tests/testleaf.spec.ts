// import { test } from "../fixture/customeFixture";
// import { readFileSync } from 'fs';
// import { join } from 'path';
// import { locators } from "../locators/locators";
// import { LoginPage } from "../pages/loginpage";
// import { LeadPage } from "../pages/leadPage";
// import { HomePage } from "../pages/homePage";

// // for (const data of leadData) {

// //  test(`Create Lead ${data.tc}`, async ({ login, homePage, leadPage }) => {

// //    await login.Credentials();
// //    await homePage.createLead();
// //    await leadPage.createLead(data);

// //  });

// // }

// // test(`Leaftaps login`,async({login,leadPage,homePage})=>{
// //     await login.Credentials();
// //     await homePage.createLead();
// //     await leadPage.createLead();    
// // })
import { test } from "../fixture/customeFixture";
import { readFileSync } from "fs";
import { join } from "path";

const leadData = JSON.parse(
  readFileSync(join(__dirname, "../data/leadData.json"), "utf-8")
);

for (const data of leadData) {

  test(`Create Lead ${data.tc}`, async ({ login, homePage, leadPage }) => {

    await login.Credentials();

    await homePage.createLead();

    await leadPage.createLead(data);

  });

}