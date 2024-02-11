import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";
import dateData from '../components/dateData';
import { useState } from 'react';
import {CategoryScale} from 'chart.js'; 
import Chart from "chart.js/auto";
import user1 from '../components/user1';
import user2 from '../components/user2';
import user3 from '../components/user3';
import user4 from '../components/user4';
import user5 from '../components/user5';
import user6 from '../components/user6';
import user7 from '../components/user7';
import user8 from '../components/user8';
Chart.register(CategoryScale);

const Dashboard = (props) => {
  const [data,setData] = useState(props.index?.userData)
  const [minutly,setMinutly] = useState(false)
  const handleChange = ()=>{
    if(data){
    if(minutly === false && data){
    const updatedChartData = {
      labels: dateData.minutly,
      datasets: [
        {
          label: "water meter",
          data: data?.minutly,
          backgroundColor: [
            "rgba(75, 192, 192, 1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    };
    setChartData(updatedChartData);
    setMinutly((prev)=>!prev);
  }else if(minutly === true && data){
      const updatedChartData = {
        labels: dateData?.hourly,
        datasets: [
          {
            label: "Users Gained",
            data: data?.hourly,
            backgroundColor: [
              "rgba(75, 192, 192, 1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      };
      setChartData(updatedChartData);
      setMinutly((prev)=>!prev);
  }}
  }
    const [chartData, setChartData] = useState({
        labels: dateData.hourly, 
        datasets: [
          {
            label: "Users Gained ",
            data: data?.hourly,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
    if(props.index?.userData){  
  return (
    
    <div className='h-screen w-screen'>
        <div className='w-screen text-center text-5xl'>User's Page</div>
  
    <div className='md:flex-row lg:flex-row flex sm:flex-col xs:flex-col flex-col items-center justify-center my-8 gap-5 '>
      <div className='flex flex-col  shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
      <div>Today's consume</div>
      <div>{data.minutly[100]}</div>
      </div>
      <div className='flex flex-col  shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
      <div>Balance</div>
      <div>{data.minutly[100]}</div>
      </div>
      <div className='flex flex-col  shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
      <div>View Usage</div>
      <div>{data.minutly[100]}</div>
      </div>

    </div>
    <div className="chart-container px-3 py-2">
      <div className='flex justify-between items-center'>
        <div className='text-center text-xl'>Water Usage over time</div> 
        <div className='ml-auto'>
        <button onClick={handleChange} className='bg-blue-600 px-5 py-2 rounded-lg text-white'>change</button>
        </div>
      </div>
      <div className='flex justify-center  items-center '>
        <div className='w-[80vw]'>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              suggestedMin : 24,
              suggestedMax: 24,
            }
          }
        }
        
      }
        className='w-[80vw]'
      />
      </div>
      </div>
    </div>
    </div>
  )
}else{
  return(
    <h1>Error</h1>
  )
}
}

export default Dashboard
