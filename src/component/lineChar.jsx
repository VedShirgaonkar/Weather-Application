import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function lChart({forecastData}) {
    //console.log(forecastData);
    if(forecastData.length==0){
      return(<div>

      </div>)
      
    }
    const quarterlyData = forecastData?.list.slice(0,7);
    //console.log(quarterlyData);
    let tempDate = quarterlyData[0].dt_txt.split(' ');

   // console.log(tempDate[1].slice(0,2));
   let time =[];
   let temprature = [];
   quarterlyData.map((items)=>{
    let Time = items.dt_txt.split(' ');
    Time = Time[1].slice(0,2);
    time.push(Time);
    temprature.push(items.main.temp);
   })
      
   const data = {
    labels: time,
    datasets: [
      {
        label: "Temprature",
        data: temprature,
        
       
        borderColor: "rgba(75,192,192,1)"
      }
      
    ]
  };

  return (
    <div className="w-100% h-auto px-5 py-2" >
          <Line data={data} />
    </div>
  );
}

export default lChart;