import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./creds.json";

/* Row Fields: {
    "Student Name": string;
    "Gender": "Male" | "Female";
    "Class Level": "1. Freshman" | "2. Sophomore" | "3. Junior" | "4. Senior";
    "Home State": string;
    "Major": string;
    "Extracurricular Activity": string;
} */

// google-spreadsheet docs: https://theoephraim.github.io/node-google-spreadsheet/#/

async function extractSheetData(): Promise<void> {
  const doc = new GoogleSpreadsheet(
    "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
  );

  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  rows.forEach((row) => {
    if (row["Class Level"] === "1. Freshman") {
      console.log(row["Student Name"]);
    }
  });
}

export default extractSheetData;
