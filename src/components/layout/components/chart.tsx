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
  CategoryScale, // x-axis scale
  LinearScale, // y-axis scale
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
    'ความเสมอภาคทางการศึกษา โอกาสในการเข้าถึง',
    'สนับสนุนให้มีโรงเรียนพ่อแม่',
  ],
  datasets: [
    {
      data: [43.5, 38.7, 5.8, 4.5, 3.5, 2.1, 1.1, 1.0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(201, 203, 207, 0.7)',
        'rgba(100, 181, 246, 0.7)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(201, 203, 207, 1)',
        'rgba(100, 181, 246, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 12,
        },
      },
      title: {
        display: true,
        color: 'black',
        text: 'ท่านอยากให้การศึกษาไทยปรับเปลี่ยนเรื่องอะไรมากที่สุด',
        font: {
          size: 12,
        },
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
