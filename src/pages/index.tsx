import { useRouter } from 'next/router';
import * as React from 'react';

export default function HomePage() {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/home');
  }, [router]);

  return <div></div>;
}
