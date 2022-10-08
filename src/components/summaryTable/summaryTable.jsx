import { useState } from "react";
import InitialSum from "../../sum.json"
export const SummaryTable = (arr) => {
    const [summaryData, setSummaryData] = useState(InitialSum);
    // const [notes, setNotes] = useState([]);
    // const [options, setOptions] = useState([]);
    // const [summaryItem, setSummaryItem] = useState({
    //     id,
    //     option,
    //     active,
    //     archived
    // });
    const notes = Object.values(arr)[0];
    
    // console.log(notes);
    
    const getUniqueOptions = (notes) => {
        const options = notes.map(note=>note.category)
        // console.log(options);
        const uniqueOptions = options.filter((option, index, options) => options.indexOf(option) === index);
        console.log(uniqueOptions);
        return uniqueOptions;
    }
    getUniqueOptions(notes);
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
