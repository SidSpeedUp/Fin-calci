import { useState } from 'react';
import './App.css'
import Button from './Button';
import Card from './Card';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  ChartJS.register(ArcElement, Tooltip, Legend);

  const names = ['']

export default function Layout(){

    const [initial1, setFinal] = useState(50);
    const [initial2, setFinal2] = useState(50);
    const [initial3, setFinal3] = useState(50);
  
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
         
          data: [initial1, initial2, initial3],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth:0,
          spacing:4,
        },
      ],
    };
  
    function handleChange(event) {
      setFinal(event.target.value);
    }
    function handleChange2(event) {
      setFinal2(event.target.value);
    }
    function handleChange3(event) {
      setFinal3(event.target.value);
    }

    function handleChange(event) {
        setFinal(event.target.value);
      }
      function handleChange2(event) {
        setFinal2(event.target.value);
      }
      function handleChange3(event) {
        setFinal3(event.target.value);
      }

    return(
        <div className='layout'>
        <div >
          <Card>
            <Button initial={initial1} type = "hello" handleChange={handleChange}/>
            <Button initial={initial2} handleChange={handleChange2}/>
            <Button initial={initial3} handleChange={handleChange3}/>
          </Card> 
        </div>
        <div className='dive'>
         <Doughnut data={data} />
        </div>
      </div>
    );
}