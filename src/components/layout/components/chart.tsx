// BarChart.tsx
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Scale,
  Title,
  Tooltip,
} from 'chart.js';
import { lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export type CalendarResponse = {
  title: string;
  value: string;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  // state สำหรับเก็บข้อมูลจาก API
  const [sheetData, setSheetData] = useState<CalendarResponse[]>([]);

  // ดึงข้อมูลจาก Sheet.best เมื่อ component mount
  useEffect(() => {
    const fetchDeschoolingDetails = async () => {
      const apiKey =
        '4UNw#HpV7wJmbx7-uKaFuid#jLv!t5oB@ESY5iWEnGICMJszJJv%nKB_Il_vGdf!';
      try {
        const response = await fetch(
          `https://api.sheetbest.com/sheets/3f057aee-5b3a-414a-8da5-9e70e6d074b6?key=${apiKey}`
        );
        const data: CalendarResponse[] = await response.json();
        console.log(JSON.stringify(data));
        setSheetData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDeschoolingDetails();
  }, []);

  // กำหนดสีพื้นฐานสำหรับแผนภูมิ
  const backgroundColor: string[] = [
    '#0c3beb',
    '#eb0c2e',
    '#ffbb2a',
    '#4bcd06',
    '#c5188e',
    '#f05b0b',
    '#6495ED',
    '#09f5e3',
  ];

  // คำนวณสี hover ด้วยการทำให้สว่างขึ้นเล็กน้อย
  const hoverBackgroundColor: string[] = backgroundColor.map((color) =>
    lighten(0.1, color)
  );

  // สร้าง chartData โดยใช้ข้อมูลจาก state ที่ดึงมาจาก API
  // หากยังไม่มีข้อมูล ให้ใช้ array ว่าง (หรือแสดง Loading state ได้)
  const chartData: ChartData<'bar'> = {
    labels: sheetData.map((item) => item.title),
    datasets: [
      {
        data: sheetData.map((item) => Number(item.value)),
        backgroundColor: backgroundColor,
        borderColor: 'black',
        borderWidth: 4,
        hoverBorderWidth: 6,
        borderRadius: 50,
        // ไม่ใช้ hoverBorderRadius เพราะ Chart.js ไม่มี property นี้
        hoverBorderColor: 'white',
        hoverBackgroundColor: hoverBackgroundColor,
        barThickness: 80,
        // หากต้องการให้ bar มีความหนาเพิ่มขึ้นเมื่อ hover สามารถใช้ hoverBarThickness ได้
        // hoverBarThickness: 90,
      },
    ],
  };

  // กำหนด options สำหรับแผนภูมิ (ChartOptions)
  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        color: 'white',
        text: 'ท่านอยากให้การศึกษาไทยปรับเปลี่ยนเรื่องอะไรมากที่สุด',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: string | number) => `${value}%`,
          color: 'white',
          font: {
            size: 18,
            weight: 'bold',
          },
        },
        beginAtZero: true,
        max: 100,
        min: 0,
        grid: {
          color: '#626567',
        },
      },
      x: {
        ticks: {
          // ใช้ฟังก์ชันธรรมดาเพื่อให้ "this" เป็น instance ของ Scale
          callback: function (_value: string | number, index: number): string {
            // cast this เป็น Scale<any>
            const scale = this as Scale<any>;
            // cast this.chart.data.labels เป็น string[]
            const labels = (scale.chart.data.labels as string[]) || [];
            return labels[index] && labels[index].length > 20
              ? `${labels[index].slice(0, 20)}...`
              : labels[index];
          },
          color: 'white',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
        grid: {
          color: '#626567',
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
