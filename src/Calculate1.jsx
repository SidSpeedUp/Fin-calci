import { useState } from "react";
import InputAbove from "./Input.jsx"
import './Calculate1.css'
import { calculateAbsoluteProfit } from "./formulasAndLogic/AbsoluteAndCagr.js";
import { calculateCAGR } from "./formulasAndLogic/AbsoluteAndCagr.js";

export default function Calculate1(){
    const [initialVal,setVal]=useState({
        initialAmount:'20',
        endingAmount:'20',
        Years:1
    });

    function handleChange(event){
      const {name,value} = event.target;
      setVal({
        ...initialVal,
        [name]:value,
      });
    }
    console.log(initialVal);


    const absoluteProfit = calculateAbsoluteProfit(initialVal.initialAmount,initialVal.endingAmount);
    console.log(absoluteProfit);
    const cagr = calculateCAGR(initialVal.initialAmount,initialVal.endingAmount,initialVal.Years);
    console.log(cagr);

    return (
        <>
        <div className="CalculatorNo1">
        <InputAbove name='initialAmount' handleChange={handleChange} initialVal={initialVal.initialAmount}/>
        <InputAbove name='endingAmount' handleChange={handleChange} initialVal={initialVal.endingAmount}/>
        <InputAbove name='Years' handleChange={handleChange} initialVal={initialVal.Years}/>
        </div>
        
        </>
    );
}