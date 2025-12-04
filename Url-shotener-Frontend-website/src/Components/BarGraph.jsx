// BarGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarGraph = ({ data }) => {
  // Extracting months and counts from data
  const months = data.map(item => item.month);
  const counts = data.map(item => item.count);

  // Chart.js data configuration
  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Number of Short Links Created',
        data: counts,
        backgroundColor: '#ffdfcc',
        borderColor: '#ed7632',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options configuration with custom font
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Nunito Sans, sans-serif', // Custom font for legend
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Count: ${tooltipItem.raw}`;
          },
        },
        bodyFont: {
          family: 'Nunito Sans, sans-serif', // Custom font for tooltip
        },
      },
      title: {
        display: true,
        text: 'Short Links Created per Month',
        font: {
          family: 'Nunito Sans, sans-serif', // Custom font for title
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Nunito Sans, sans-serif', // Custom font for x-axis labels
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Nunito Sans, sans-serif', // Custom font for y-axis labels
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;
