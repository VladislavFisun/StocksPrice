import React from 'react';
import {  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

type chartElementProps={
    dataC?:any
    dataT?:any
    dataH?:any
    dataI?:any
}

const chartElementItem:React.FC<chartElementProps> = ({dataC,dataH,dataI,dataT}) => {

   
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = dataT.map((item:number)=>item);
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataC.map((item:number) =>item ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: dataH.map((item:number) =>item),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 3',
        data: dataI.map((item:number) =>item),
        borderColor: 'rgb(105, 221, 101)',
        backgroundColor: 'rgba(111, 238, 107, 0.5)',
      },
    
    ],
  };
  

    return (
    <Line options={options} data={data} />
    )
  
  
};

export default chartElementItem;