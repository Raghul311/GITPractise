import { expect, test } from "@playwright/test";
import * as XLSX from "xlsx";

const filePath = "data/login.xlsx";

// Read Excel
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const records: any[] = XLSX.utils.sheet_to_json(sheet);

// Data-driven tests
for (const [index, data] of records.entries()) {

  test(`Login via Excel ${data.tcid}`, async ({ page }) => {

    try {

      await page.goto("http://leaftaps.com/opentaps/control/main");

      await page.fill("#username", data.username);
      const pss= await page.fill("#password", data.password);
      await expect(page).toHaveScreenshot();

      await page.click(".decorativeSubmit");

      // mark PASS
      records[index].status = "PASS";

    } catch (error) {

      // mark FAIL
      records[index].status = "FAIL";

      throw error;

    }

  });

}

// Write result back to Excel
test.afterAll(async () => {

  const newSheet = XLSX.utils.json_to_sheet(records);

  workbook.Sheets[sheetName] = newSheet;

  XLSX.writeFile(workbook, filePath);

});