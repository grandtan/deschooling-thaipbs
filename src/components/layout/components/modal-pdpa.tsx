import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ModalPdpa: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const title = (
    <div className='pb-1 text-sm font-bold md:text-xl'>
      การอนุญาตให้จัดเก็บข้อมูล PDPA
    </div>
  );

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={title}
        style={{
          marginTop: '14%',
        }}
        width={600}
        className='sm:w-full'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        bodyStyle={{
          height: '110px',
          overflow: 'auto',
        }}
        footer={[
          <Button key='no-accept-button' type='default'>
            ไม่ยอมรับ
          </Button>,
          <Button
            key='accept-button'
            type='ghost'
            className='bg-[#2f96f1] text-white hover:bg-[#50aee1]'
          >
            ยอมรับ
          </Button>,
        ]}
      >
        <div className=' flex flex-col items-center pb-1 text-sm md:text-lg '>
          คุณต้องการอนุญาตให้เราจัดเก็บและใช้ข้อมูลของคุณเพื่อระบุตำแหน่งของคุณ
          ตามข้อกำหนด PDPA หรือไม่ ?
        </div>
      </Modal>
    </>
  );
};

export default ModalPdpa;
