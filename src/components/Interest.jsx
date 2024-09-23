import { useState } from "react";
import '../App.css';
const Interest=()=> {

    const [result,setResult]=useState("");
    const [principal,setPrincipal]=useState("");
    const [roi,setRate]=useState("");
    const [time,setTime]=useState("");

    const handleResult=()=>{
        let temp=parseInt(principal)*parseInt(roi)*parseInt(time);
        temp=temp/100;
        setResult("₹ " + temp);
    };
    const handleReset=()=>{
        setResult("₹");
        setPrincipal("");
        setRate("");
        setTime("");

    };
  return (
    <>
      <div className="Interest-container">
        <div className="heading">
            <h1>Simple Calculator</h1>
        </div>

        <div className="subHeading">
            <p>Calculate your simple interest Easily</p>
        </div>

        <div className="Result-box">
            <input type="text" className="Resultbox-input" value={result} placeholder="₹" readOnly/>
            <p>Total simple interest</p>
        </div>
        <div className="Parameter-box">
            <input type="text" value={principal} placeholder="₹ Principal amount" onChange={(e)=>{setPrincipal(e.target.value)}}/>
            <input type="text" value={roi} placeholder="Rate of interest (p.a) %" onChange={(e)=>{setRate(e.target.value)}}/>
            <input type="text" value={time} placeholder="Time period ( Yr )" onChange={(e)=>{setTime(e.target.value)}}/>
            
        </div>
        <div className="Footer-btn">
            <button id="result-btn" onClick={handleResult}>CALCULATE</button>
            <button id="reset-btn" onClick={handleReset}>RESET</button>
        </div>
      </div>
    </>
  );
};
export default Interest;
