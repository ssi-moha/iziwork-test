import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet";
import getGoogleCreds from "./getGoogleCreds";

/* Row Fields: {
    "Student Name": string;
    "Gender": "Male" | "Female";
    "Class Level": "1. Freshman" | "2. Sophomore" | "3. Junior" | "4. Senior";
    "Home State": string;
    "Major": string;
    "Extracurricular Activity": string;
} */

// google-spreadsheet docs: https://theoephraim.github.io/node-google-spreadsheet/#/

async function extractDatafromSheet(): Promise<GoogleSpreadsheetRow[]> {
  const doc = new GoogleSpreadsheet(
    "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
  );

  await doc.useServiceAccountAuth(getGoogleCreds());

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows;
}

export default extractDatafromSheet;
