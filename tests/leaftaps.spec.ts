import { expect, test } from "@playwright/test";
test(`Leaftaps login`,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    //await page.waitForTimeout(5000);
    await page.locator(`//input[@id="username"]`).fill("Demosalesmanager");
    await page.locator(`//input[@id="password"]`).fill("crmsfa");
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    //login page completed

    await page.locator(`//div[@class="crmsfa"]`).click();
    await page.locator(`//a[contains(text(),"Create Lead")]`).click();
    await page.locator(`(//input[@name="companyName"])[2]`).fill("TestLeaf");
    await page.locator(`(//input[@name="firstName"])[3]`).fill("Raghul");
    const firstName= await page.locator(`(//input[@name="firstName"])[3]`).inputValue();
    await page.locator(`(//input[@name="lastName"])[3]`).fill("Kumar");
    const lastName= await page.locator(`(//input[@name="lastName"])[3]`).inputValue();
    await page.selectOption("#createLeadForm_dataSourceId",{value: "LEAD_CONFERENCE"})
    await page.selectOption(`#createLeadForm_industryEnumId`,{value:"IND_HARDWARE"})

    await page.click(`.smallSubmit`);
    await expect(page.locator(`#viewLead_firstName_sp`)).toHaveText(firstName);
    await expect(page.locator(`#viewLead_lastName_sp`)).toHaveText(lastName);
    console.log(await page.locator(`#viewLead_firstName_sp`).textContent());
    console.log(await page.locator(`#viewLead_lastName_sp`).textContent());

    //await page.locator(`//div[contains(text(),"follow us on")]`).scrollIntoViewIfNeeded()
        await page.waitForTimeout(5000);
})

test('test', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('democsr');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsa');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#errorDiv')).toContainText('following error occurred during login: Password incorrect.');
  await page.waitForTimeout(5000);
});
test.only('Calender', async ({ page }) => {
    await page.waitForTimeout(50000);
    const date=31;
    const month=12;
    const year=2024;
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.click(".react-date-picker__inputGroup");
    await page.click(`.react-calendar__navigation__label`);
    await page.click(`.react-calendar__navigation__label`);
    await page.getByText(year.toString()).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator(`//abbr[text()="${date}"]`).click();

})