import React, { useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import axios from "axios";




const ProgressChart = () => {
  const [chartData, setChartData] = useState({});
 

  const chart = () => {
   
  let date= [];
  let weight= [];
    axios
      .get("http://localhost:4000/tracker")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data.trackerItem) {
          date.push(new Date (dataObj.date).toLocaleDateString("en-US"));
          weight.push(parseInt(dataObj.weight));

          console.log(date)
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
  }, []);
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

