import React from "react";
import Div1 from "./Div1";
import Div2 from "./Div2";
import "./Function.css";

import react, { useState } from "react";

const Function = () => {
  const [first, setfirst] = useState();
  function clickbtn1() {
    setfirst(!first);
  }
   
  const [second,setSecond] = useState()
  function clickbtn2(){
setSecond(!second)
  }
 
  return (
    <div>
      <h2 className="heading">Styling using Functional and Class Component</h2>
        <br /><br />
      <div className="flexBox">
        <div>
          <button onClick={clickbtn1} className="botton1">
            To see styling functional Component
          </button><br /><br /><br /><br />
          <div>{first&& <Div1/>}</div>
        </div>

        <div>
          <button onClick={clickbtn2} className="botton2">
            To see styling in class Component
          </button><br /><br /><br /><br />
          <div>{second&&<Div2/>}</div>
        </div>
      </div>
    </div>
  );
};

export default Function;
