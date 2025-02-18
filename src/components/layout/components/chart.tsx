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
  // State สำหรับเก็บข้อมูลที่ได้จาก API
  const [sheetData, setSheetData] = useState<CalendarResponse[]>([]);
  // State สำหรับ Loading (ถ้าต้องการแสดง indicator)
  const [loading, setLoading] = useState<boolean>(true);

  // ดึงข้อมูลจาก Sheet.best เมื่อ component mount
  useEffect(() => {
    const fetchDeschoolingDetails = async () => {
      const apiKey =
        '4UNw#HpV7wJmbx7-uKaFuid#jLv!t5oB@ESY5iWEnGICMJszJJv%nKB_Il_vGdf!';
      try {
        const response = await fetch(
          `https://api.sheetbest.com/sheets/1ef52ca3-48f4-4a1e-bf97-973a9a2ec620?key=${apiKey}`
        );
        const data: CalendarResponse[] = await response.json();
        console.log(JSON.stringify(data));
        setSheetData(data);
      } catch (error) {
        console.error('Error fetching sheet data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeschoolingDetails();
  }, []);

  // กำหนดสีพื้นฐานสำหรับแผนภูมิ
  const backgroundColor: string[] = [
    '#4bcd06',
    '#ffbb2a',
    '#9b59b6',
    '#eb0c2e',
    '#0c3beb',
    '#c5188e',
    '#f05b0b',
    '#6495ED',
    '#09f5e3',
  ];

  // คำนวณสี hover ด้วยการทำให้สว่างขึ้นเล็กน้อย
  const hoverBackgroundColor: string[] = backgroundColor.map((color) =>
    lighten(0.1, color)
  );

  // สร้าง chartData โดยใช้ข้อมูลจาก state
  const chartData: ChartData<'bar'> = {
    labels: sheetData.map((item) => item.title),
    datasets: [
      {
        data: sheetData.map((item) => Number(item.value)),
        backgroundColor: backgroundColor,
        borderColor: 'black',
        borderWidth: 2,
        hoverBorderWidth: 4,
        borderRadius: 16,
        // ไม่ใช้ hoverBorderRadius เพราะ Chart.js ไม่มี property นี้
        hoverBorderColor: 'white',
        hoverBackgroundColor: hoverBackgroundColor,
        barThickness: 80,
        // หากต้องการให้ bar หนาขึ้นเมื่อ hover สามารถเปิดใช้งาน hoverBarThickness ได้
        // hoverBarThickness: 90,
      },
    ],
  };

  // กำหนด options สำหรับแผนภูมิ
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
            const scale = this as Scale<any>;
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

  // ถ้าอยู่ในสถานะ loading ให้แสดงข้อความ Loading
  if (loading) {
    return (
      <div className='flex h-full items-center justify-center'>
        <p className='text-lg text-gray-500'>Loading chart...</p>
      </div>
    );
  }

  return (
    <div className='h-full w-full'>
      {/* Container นี้ใช้สำหรับกำหนดความสูงให้ตอบสนองต่อขนาดหน้าจอ */}
      <div className='h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
