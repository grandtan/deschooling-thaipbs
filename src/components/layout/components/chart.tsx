import { lighten } from 'polished';

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

const backgroundColor = [
  '#0c3beb',
  '#eb0c2e',
  '#ffbb2a',
  '#4bcd06',
  '#c5188e',
  '#f05b0b',
  '#6495ED',
  '#09f5e3',
];

const hoverBackgroundColor = backgroundColor.map((color) =>
  lighten(0.1, color)
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
      data: [50, 60, 70, 80, 50, 30, 40, 60],
      backgroundColor: [
        '#0c3beb',
        '#eb0c2e ',
        '#ffbb2a ',
        '#229954',
        '#c5188e ',
        '#f05b0b ',
        '#6495ED ',
        '#09f5e3 ',
      ],

      borderColor: 'black',
      borderWidth: 4,
      hoverBorderWidth: 6,
      borderRadius: 30,
      hoverBorderRadius: 30,
      hoverBorderColor: 'white',
      hoverBackgroundColor: hoverBackgroundColor,
      barThickness: 80,
      hoverbarThickness: 90,
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
        color: '#626567 ',
      },
    },
    x: {
      ticks: {
        callback: function (_value: string | number, index: number) {
          const labels = this.chart?.data?.labels as string[];
          return labels && labels[index]?.length > 20
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
        color: '#626567 ',
      },
    },
  },
};
