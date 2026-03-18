import{test as baset, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { LeadPage } from "../pages/leadPage";
import { HomePage } from "../pages/homePage";

type myFixtures = {
    login:LoginPage,
    homePage:HomePage,
    leadPage: LeadPage
    
}

export const test= baset.extend<myFixtures>({

    login: async({page},use)=>{
        const login= new LoginPage(page);
        await use(login);
    },
    homePage: async({page},use)=>{
        const homePage= new HomePage(page);
        await use(homePage);
    },
    leadPage: async({page},use)=>{
        const leadPage= new LeadPage(page);
        await use(leadPage);
    },
})