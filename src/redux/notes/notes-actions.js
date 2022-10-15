import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

export const addNote = createAction(
  "notes/addNote",
  (name, category, content) => {
    return {
      payload: {
        id: nanoid(),
        name,
        created: getCurrentDate(),
        category,
        content,
        dates: getDates(content),
        status: "active",
      },
    };
  }
);
export const editNote = createAction(
  "notes/editNote",
  (name, category, content) => {
    return {
      payload: {
        name,
        category,
        content,
      },
    };
  }
);
export const deleteNote = createAction("notes/deleteNote");
export const archiveNote = createAction("notes/archiveNote");
