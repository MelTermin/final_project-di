import React, { useState, useEffect,useContext} from 'react'
import { Line } from "react-chartjs-2";
import axios from "axios";
import {WorkoutContext} from '../context/WorkoutContext'




const ProgressChart = () => {
  const [chartData, setChartData] = useState({});
  const {details}=useContext(WorkoutContext)
 

  console.log("details", details)

 

  const chart = () => {
   
  let date= [];
  let weight= [];
    
    axios
      .get("http://localhost:4000/tracker")
      .then(res => {
        console.log("res",res);
        for (const dataObj of res.data.data.trackerItem) {
          date.push(new Date (dataObj.date).toLocaleDateString("en-US"));
          weight.push(parseInt(dataObj.weight));
        
        

          console.log(date)
          console.log(weight)
       
        }
        setChartData({
          labels: date,
          datasets: [
            {
              label: "Track Progress",
              data: weight,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
       
      })
      .catch(err => {
        console.log(err);
       
      });
      
  };





  useEffect(() => {
    chart();
  }, [details]);
  return (
    <div >
      <h1>Track Progress</h1>
      <div style= {{height:"200px", width:"700px"}}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Track Progress", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProgressChart;

