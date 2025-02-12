// @/context/loadingContext.tsx
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {
    console.log('loading');
  },
});

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 60, color: '#ffba00' }} spin />
  );

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      // แสดง loading เป็นเวลา 2 วินาที ก่อนที่จะซ่อน
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {loading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 10000,
            }}
          >
            <Spin indicator={antIcon} spinning={loading} />
          </div>
        )}
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
