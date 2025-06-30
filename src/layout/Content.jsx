import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

const AppContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        overflow: 'auto',
      }}
    >
      Content
    </Content>
  );
};

export default AppContent;
