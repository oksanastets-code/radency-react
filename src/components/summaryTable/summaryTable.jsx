import { useState, useEffect } from "react";
import InitialSum from "../../sum.json";

import { getUniqueOptions } from "../../helper/getUniqueOptions";

export const SummaryTable = (arr) => {
  const [summaryData, setSummaryData] = useState(InitialSum);

  //   const [summaryItem, setSummaryItem] = useState({
  //       option: "",
  //       active: null,
  //       archived: null,
  //   });

  useEffect(() => {
    setSummaryData([]);
    const notes = Object.values(arr)[0];
    const categories = getUniqueOptions(notes);

    categories.forEach((category) => {
      console.log(category);
      const arrayByCategory = notes.filter(
        (note) => note.category === category
      );
      console.log(arrayByCategory);
      const activeNotes = arrayByCategory.filter(
        (note) => note.status === "active"
      );
      console.log(activeNotes.length);
      const archivedNotes = arrayByCategory.filter(
        (note) => note.status === "archived"
      );
      console.log(archivedNotes.length);

      const newSummaryRowData = {};
      newSummaryRowData.option = category;
      newSummaryRowData.active = activeNotes.length;
      newSummaryRowData.archived = archivedNotes.length;

      setSummaryData((prev) => [...prev, newSummaryRowData]);
    });
  }, [arr]);

  return (
    <tbody>
      {summaryData.map((data) => (
        <tr key={data.option}>
          <td>{data.option}</td>
          <td>{data.active}</td>
          <td>{data.archived}</td>
        </tr>
      ))}
    </tbody>
  );
};
