import react from "react";

function Coloritem (props){
 return <li style={{color : props.colors}}>{props.colors}</li>
}

export default Coloritem;