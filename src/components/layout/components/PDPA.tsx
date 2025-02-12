// components/PDPA.tsx
import { Button, Modal, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const PDPA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pdpaAccepted = localStorage.getItem('pdpaAccepted');
      if (!pdpaAccepted) {
        setVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    // บันทึกการยอมรับ (ถ้าต้องการ) แล้วปิด Popup
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('pdpaAccepted', 'false');
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      title='นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA)'
      footer={[
        <Button key='reject' onClick={handleReject}>
          ไม่ยอมรับ
        </Button>,
        <Button key='accept' onClick={handleAccept}>
          ยอมรับ
        </Button>,
      ]}
      // ไม่ต้องการ mask ปกคลุมทั้งหน้าจอ
      mask={false}
      maskClosable={false}
      closable={false}
      // Render Modal ในที่เดียวกับ Layout
      getContainer={false}
      // ใช้ modalRender เพื่อกำหนดตำแหน่งที่แน่นอน
      modalRender={(node) => (
        <div
          className=''
          style={{
            position: 'fixed',
            bottom: 0, // ชิดขอบล่าง
            left: 0, // ชิดขอบซ้าย
            pointerEvents: 'none', // ให้ pointer event ผ่านไปยังส่วนอื่น
            backgroundColor: 'transparent', // เพิ่มพื้นหลังโปร่งใส
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>{node}</div>
        </div>
      )}
    >
      <Typography.Paragraph style={{ color: '#000' }}>
        เว็บไซต์นี้ใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อปรับปรุงประสบการณ์การใช้งาน
        และเพื่อวัตถุประสงค์ในการวิเคราะห์ข้อมูล หากคุณยอมรับการใช้คุกกี้
        กรุณาคลิก “ยอมรับ”
      </Typography.Paragraph>
    </Modal>
  );
};

export default PDPA;
