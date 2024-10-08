import React, {FC} from "react";
interface ChildProps{
onMessage:(msg: string)=>void;
}
const Header:React.FC<ChildProps>=({onMessage})=>
{
return (
    <button onClick={()=>onMessage('Hello from child')}>send Message</button>
    )
};
export default Header;