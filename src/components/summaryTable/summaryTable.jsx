import { useState, useEffect } from "react";

import { getUniqueOptions } from "../../helper/getUniqueOptions";

export const SummaryTable = (arr) => {
  const [summaryData, setSummaryData] = useState([]);
//   const [newSummaryRowData, setNewSummaryRowData] = useState({});
  useEffect(() => {
    setSummaryData([]);
    const notes = Object.values(arr)[0];
    const categories = getUniqueOptions(notes);

    categories.forEach((category) => {
      const arrayByCategory = notes.filter(
        (note) => note.category === category
      );
      const activeNotes = arrayByCategory.filter(
        (note) => note.status === "active"
      );
      const archivedNotes = arrayByCategory.filter(
        (note) => note.status === "archived"
      );
      
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
