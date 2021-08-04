import { createTodo } from "./api/post/todos";
import setupEnv from "./setupEnv";
import extractDatafromSheet from "./sheet";
import { isFreshman } from "./utils";

setupEnv();

async function sendFreshmansToApi() {
  const rows = await extractDatafromSheet();

  rows.forEach((row) => {
    if (isFreshman(row)) {
      createTodo({ title: row["Student Name"], completed: false });
    }
  });
}

sendFreshmansToApi();
