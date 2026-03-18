import { count } from "node:console";

export const locators = {
    createlead: {
        username: '//input[@id="username"]',
        password: `//input[@id="password"]`,
        crmsfa:'//a[contains(text(),"CRM/SFA")]',
        loginButton: `//input[@class="decorativeSubmit"]`,
        createLeadButton: `//a[contains(text(),"Create Lead")]`,
  companyName: '#createLeadForm_companyName',
  firstName: '#createLeadForm_firstName',
  lastName: '#createLeadForm_lastName',
        dataSourceId: `#createLeadForm_dataSourceId`,
        industryEnumId: `#createLeadForm_industryEnumId`,
        submitButton: `.smallSubmit`,
        viewLeadFirstName: `#viewLead_firstName_sp`,
        viewLeadLastName: `#viewLead_lastName_sp`,
        personalTitle: `//input[@name="personalTitle"]`,
        countryCode: `#createLeadForm_primaryPhoneCountryCode`,
        areaCode: `//input[@name="areaCode"]`,
        phoneNumber: `#createLeadForm_primaryPhoneNumber`,
        email: `//input[@name="email"]`,
        addressline1: `//input[@name="addressLine1"]`,
        city: `//input[@name="city"]`,
        postalCode: `//input[@name="postalCode"]`,
        addressline2: `//input[@name="addressLine2"]`,
        state: `//input[@name="state"]`,
        country: `//input[@name="country"]`,
    }
    
}