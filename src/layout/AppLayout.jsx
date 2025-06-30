import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSider from './Menu';
import AppHeader from './Header';
import AppContent from './Content';

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider collapsed={collapsed} />
      <Layout style={{ minWidth: 0 }}>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
