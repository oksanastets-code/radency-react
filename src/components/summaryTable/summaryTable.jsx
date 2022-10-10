import { useState, useEffect } from "react";
import InitialSum from "../../sum.json"

import { getUniqueOptions } from "../../helper/getUniqueOptions"

export const SummaryTable = (arr) => {
    const [summaryData, setSummaryData] = useState(InitialSum);
    // const [notes, setNotes] = useState([]);
    // const [options, setOptions] = useState([]);
    const [summaryItem, setSummaryItem] = useState({
        option: "",
        active: null,
        archived: null
    });
    // const notes = Object.values(arr)[0];
    // console.log(notes);
    // notes.forEach(note => console.log(note.status));
    // const categories = getUniqueOptions(notes);
    // console.log(categories);
    useEffect(() => {
        const notes = Object.values(arr)[0];
        const categories = getUniqueOptions(notes);
        
     categories.forEach(category => {
                console.log(category);
                const arrayByCategory = notes.filter(note => note.category === category);
                console.log(arrayByCategory);
                const activeNotes = arrayByCategory.filter(note => note.status === "active")
                console.log(activeNotes.length);
                const archivedNotes = arrayByCategory.filter(note => note.status === "archived")
                console.log(archivedNotes.length);
       
                setSummaryItem({
                    option: category,
                    active: activeNotes.length,
                    archived: archivedNotes.length
                });
                // console.log(summaryItem);
            })
    }, [arr])
//     useEffect(() => {
//     setSummaryData(prev=> [...prev, ...summaryItem])
//   }, [summaryItem]);
//  setSummaryData(prev=> [...prev, ...summaryItem])
    // console.log(summaryData);
    
   

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
