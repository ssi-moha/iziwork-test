import { AxiosResponse } from "axios";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { Todo } from "./entities/Todo";

const CLASS_LEVEL = "Class Level";
const FRESHMAN = "1. Freshman";

export type EntityWithID<T> = T & { id: number };

export const getClassLevel = (row: GoogleSpreadsheetRow): string | undefined =>
  row[CLASS_LEVEL];

export const isFreshman = (row: GoogleSpreadsheetRow): boolean =>
  getClassLevel(row) === FRESHMAN;

export const logCreatedTodo = (response: AxiosResponse<Todo>) => {
  if (response.status === 201)
    console.log(
      `${response.data.title}'s data has been successfully created 🚀`
    );
};
