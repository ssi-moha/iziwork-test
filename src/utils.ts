import { AxiosResponse } from "axios";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { Todo } from "./entities/Todo";

export const CLASS_LEVEL = "Class Level";
export const STUDENT_NAME = "Student Name";
export const FRESHMAN = "1. Freshman";
export const HOME_STATE = "Home State";

export type EntityWithID<T> = T & { id: number };

export const getHomeState = (
  student: GoogleSpreadsheetRow
): string | undefined => student[HOME_STATE];

export const getStudentName = (
  student: GoogleSpreadsheetRow
): string | undefined => student[STUDENT_NAME];

export const getClassLevel = (
  student: GoogleSpreadsheetRow
): string | undefined => student[CLASS_LEVEL];

export const isFreshman = (student: GoogleSpreadsheetRow): boolean =>
  getClassLevel(student) === FRESHMAN;

export const getTodoTitle = (student: GoogleSpreadsheetRow) =>
  `${isFreshman(student) ? "Accueillir" : "Réintégrer"} ${getStudentName(
    student
  )}`;

export const logCreatedTodo = (response: AxiosResponse<Todo>) => {
  if (response.status === 201)
    console.log(`"${response.data.title}" has been successfully created 🚀`);
};
