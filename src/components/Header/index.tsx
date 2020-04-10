import React from "react";
import styled from "styled-components";

import { Layout, Menu, Typography } from "antd";
import { FireOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: black;
  padding: 1rem;

  & h4.ant-typography,
  .ant-typography h4 {
    color: yellow;
    margin: 0;
  }
`;

const SiderStyled = styled(Sider)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  & .ant-layout-sider-zero-width-trigger:hover,
  & .ant-layout-sider-zero-width-trigger,
  & .ant-menu.ant-menu-dark,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background: black;
    color: yellow;
  }

  & .ant-menu-dark .ant-menu-item-selected,
  & .anticon svg,
  & .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    color: yellow;
  }

  & .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #163a5f;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title level={4}>COVID WORKOUT</Title>
      <SiderStyled
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <FireOutlined />
            <span className="nav-text">ออกกำลังกาย</span>
          </Menu.Item>
          <Menu.Item key="2">
            <SettingOutlined />
            <span className="nav-text">ตั้งค่าโปรแกรมของคุณ</span>
          </Menu.Item>
        </Menu>
      </SiderStyled>
    </Wrapper>
  );
};

export default Header;
