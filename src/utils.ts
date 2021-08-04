import { GoogleSpreadsheetRow } from "google-spreadsheet";

const CLASS_LEVEL = "Class Level";
const FRESHMAN = "1. Freshman";

export const getClassLevel = (row: GoogleSpreadsheetRow): string | undefined =>
  row[CLASS_LEVEL];

export const isFreshman = (row: GoogleSpreadsheetRow): boolean =>
  getClassLevel(row) === FRESHMAN;
