import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  ShoppingCartOutlined,
  DropboxOutlined,
  RollbackOutlined,
  AppstoreOutlined,
  TeamOutlined,
  StarOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = ({ collapsed }) => {
  const [openKeys, setOpenKeys] = useState(['sanpham']);

  const handleOpenChange = (keys) => {
    const latest = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latest ? [latest] : []);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#001529' }}>
      <div
        style={{
          padding: 16,
          fontWeight: 'bold',
          fontSize: 16,
          color: 'white',
          textAlign: 'center',
        }}
      >
        {!collapsed && 'BeeLapTop'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={collapsed ? [] : openKeys}
        onOpenChange={handleOpenChange}
        defaultSelectedKeys={['thongke']}
      >
        <Menu.Item key="thongke" icon={<PieChartOutlined />}>
          Thống Kê
        </Menu.Item>

        <Menu.Item key="banhang" icon={<ShoppingCartOutlined />}>
          Bán Hàng Tại Quầy
        </Menu.Item>

        <Menu.Item key="donhang" icon={<DropboxOutlined />}>
          Quản Lý Đơn Hàng
        </Menu.Item>

        <Menu.Item key="trahang" icon={<RollbackOutlined />}>
          Trả Hàng
        </Menu.Item>

        <SubMenu key="sanpham" icon={<AppstoreOutlined />} title="Sản Phẩm">
          {[
            'Màu Sắc',
            'Chip',
            'Imei',
            'Ram',
            'Rom',
            'Hãng',
            'Pin',
            'Danh Mục',
            'Thẻ SIM',
          ].map((item) => (
            <Menu.Item key={`sanpham-${item}`}>{item}</Menu.Item>
          ))}
        </SubMenu>

        <SubMenu key="taikhoan" icon={<TeamOutlined />} title="Tài Khoản">
          {['Nhân Viên', 'Khách Hàng'].map((item) => (
            <Menu.Item key={`taikhoan-${item}`}>{item}</Menu.Item>
          ))}
        </SubMenu>

        <SubMenu key="giamgia" icon={<StarOutlined />} title="Giảm Giá">
          {['Phiếu Giảm Giá', 'Đợt Giảm Giá'].map((item) => (
            <Menu.Item key={`giamgia-${item}`}>{item}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AppSider;