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
          label: "Users Gained",
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
    <div className=' grid grid-cols-2 items-center justify-items-center content-center w-screen gap-y-5 mt-11'>
        <div className='flex flex-col col-span-1 shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
            <div>Today's consume</div>
            <div>{data.minutly[100]}</div>
        </div>
        <div className='flex flex-col col-span-1 shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
            <div>Balance</div>
            <div>{data.minutly[100]}</div>
        </div>
        <div className='flex flex-col items-center col-span-1 shadow-lg shadow-gray-500/50 px-5 py-3 rounded-lg text-center w-[300px]'>
            <div>View Usage</div>
            <div>{data.minutly[100]}</div>
        </div>
    </div>
    <div className="chart-container px-3 py-2">
      <div className='flex justify-between'>
        <div className='text-center w-full'>Line Chart</div> 
        <div className='ml-auto'>
        <button onClick={handleChange}>change</button>
        </div>
      </div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
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
        
      />
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
