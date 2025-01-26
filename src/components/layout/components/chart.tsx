import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const chartData = {
  labels: [
    'หลักสูตรที่ทันสมัยเรียนไปใช้ได้จริงเน้นการสร้างสมรรถนะ',
    'ลดภาระงานครู',
    'งบประมาณจากส่วนกลางที่เหมาะกับสภาพพื้นที่',
    'การกระจายอำนาจไปสู่สถานศึกษา',
    'การจัดสรรงบประมาณอาหารกลางวัน',
    'ระบบผลิตและพัฒนาครู',
    'ความเสมอภาคทางการศึกษาโอกาสในการเรียนต่อ',
    'สนับสนุนให้มีโรงเรียนพ่อแม่',
  ],
  datasets: [
    {
      data: [43.5, 38.7, 5.8, 4.5, 3.5, 2.1, 1.1, 1.0],
      backgroundColor: [
        'rgba(54, 162, 235, 1.0)', // สีฟ้าเข้ม
        'rgba(255, 99, 132, 1.0)', // สีแดงเข้ม
        'rgba(255, 206, 86, 1.0)', // สีเหลืองเข้ม
        'rgba(75, 192, 192, 1.0)', // สีเขียวอมฟ้าเข้ม
        'rgba(153, 102, 255, 1.0)', // สีม่วงเข้ม
        'rgba(255, 159, 64, 1.0)', // สีส้มเข้ม
        'rgba(201, 203, 207, 1.0)', // สีเทาเข้ม
        'rgba(100, 181, 246, 1.0)', // สีฟ้าสด
      ],

      borderColor: 'rgba(0, 0, 0 )',
      borderWidth: 2.5,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      color: 'black',
      text: 'ท่านอยากให้การศึกษาไทยปรับเปลี่ยนเรื่องอะไรมากที่สุด',
      font: {
        size: 14,
      },
      padding: {
        top: 4,
        bottom: 4,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (value: string | number) => `${value}%`,
        color: 'rgba(75, 75, 75, 1)',
        font: {
          size: 10,
        },
      },
      beginAtZero: true,
      max: 100,
      min: 0,
    },
    x: {
      ticks: {
        callback: function (_value: string | number, index: number) {
          const labels = this.chart?.data?.labels as string[];
          return labels && labels[index]?.length > 20
            ? `${labels[index].slice(0, 20)}...`
            : labels[index];
        },
        color: 'rgba(75, 75, 75, 1)',
        font: {
          size: 8,
        },
      },
    },
  },
};
