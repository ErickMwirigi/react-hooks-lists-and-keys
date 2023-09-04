import React from "react";
import Coloritem from "./Coloritem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  
   const Item = colors.map((Ran) => {return <Coloritem key={Ran} color={Ran}/>})

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {Item} 
      </ol>
    </div>
  );
}

export default ColorList;
