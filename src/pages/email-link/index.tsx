import Link from 'next/link';
import React from 'react';

import Layout from '@/components/layout/Layout';

interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
}

const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  subject,
  body,
  children,
}) => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject || ''
  )}&body=${encodeURIComponent(body || '')}`;
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <Link href={mailto}>
        <div>{children}</div>
      </Link>
    </Layout>
  );
};

export default EmailLink;
