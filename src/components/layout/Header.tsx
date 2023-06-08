// components/Layout.tsx
import * as React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Header: React.FC<LayoutProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default Header;
