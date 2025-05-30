import React from "react";
import TableWithGrid from "./Components/TableWithGrid";
import './Components/Table.css'
import ReferenceDemo from "./Components/ReferenceDemo";
import Ddemo from "./Components/DraggableDemo";
import EffectDemo from "./EffectDemo";
import StyledSortableTree from "./SortableTree";
const sampleData = [
  { id: 1, name: "Alice Johnson", description: "Senior Software Engineer at XYZ Corporation" },
  { id: 2, name: "Bob Williams", description: "Product Manager with experience in Agile methodologies" },
  { id: 3, name: "Charlie Brown", description: "UX Designer focusing on accessibility and user experience" },
   {id:4,name:"Bhaveshkumar Jibhakate ",description:"short text"}
];

const App = () => {

  return (
    <div>
      <h2>Table with Grid and Conditional Tooltip</h2>
      <TableWithGrid data={sampleData} />
      <ReferenceDemo/>
      <Ddemo/>
      <EffectDemo/>
      <StyledSortableTree/>
    </div>
  );
};

export default App;
