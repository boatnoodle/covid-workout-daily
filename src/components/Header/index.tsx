import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { FireOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #8cb90b;
  padding: 1rem;

  & h4.ant-typography,
  .ant-typography h4 {
    margin: 0;
    color: black;
  }
`;

const SiderStyled = styled(Sider)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 999;
  & .ant-layout-sider-zero-width-trigger:hover,
  & .ant-layout-sider-zero-width-trigger,
  & .ant-menu.ant-menu-dark,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background: #8cb909;
    color: black;
  }

  & .ant-menu-dark .ant-menu-item-selected,
  & .anticon svg,
  & .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    color: black;
    & span,
    svg {
      color: #8cb909;
    }
  }

  & .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: black;
    color: #8cb909;
  }
`;

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  const handleRoute = (page) => {
    switch (page) {
      case "home":
        history.push("/");
        break;
      case "workout":
        history.push("/workout");
        break;
      case "setting-workout":
        history.push("/setting-workout");
        break;
      default:
        break;
    }

    setCollapsed(true);
  };

  return (
    <Wrapper>
      <div onClick={() => handleRoute("home")}>
        <Title level={4}>COVID WORKOUT</Title>
      </div>
      <SiderStyled
        breakpoint="lg"
        collapsedWidth={0}
        collapsed={collapsed}
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => handleRoute("workout")}>
            <FireOutlined />
            <span className="nav-text">ออกกำลังกาย</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => handleRoute("setting-workout")}>
            <SettingOutlined />
            <span className="nav-text">ตั้งค่าโปรแกรมของคุณ</span>
          </Menu.Item>
        </Menu>
      </SiderStyled>
    </Wrapper>
  );
};

export default Header;
