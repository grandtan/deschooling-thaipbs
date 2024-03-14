import React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';

interface CardItemProps {
  title: string;
  titleIcon: React.ReactNode;
  items: { nameTitle: string; linkPath: string; icon: React.ReactNode }[];
}

const CardItem: React.FC<CardItemProps> = ({ title, titleIcon, items }) => (
  <div className='py-10'>
    <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00] '>
      {titleIcon}
      <div className=' text-3xl  underline  sm:no-underline'>{title}</div>
    </div>
    <Row
      gutter={[16, 16]}
      justify='start'
      className=' my-16 overflow-y-auto md:my-40  '
    >
      {items.map((item, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={12} xl={6}>
          <div className='flex  flex-col items-center space-y-6'>
            <div className='text-center text-xl text-[#ffba00] md:text-2xl'>
              {item.nameTitle}
            </div>
            <div className='flex h-[150px] w-[260px] items-center justify-center  rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href={item.linkPath}>{item.icon}</Link>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default CardItem;
