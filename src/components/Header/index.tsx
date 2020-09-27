import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import firebase from "utils/firebase";

const { Sider } = Layout;
const { Title } = Typography;

const HeaderStyled = styled(Title)`
  &&& {
    margin-left: 20px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background: #ff6700;
  padding: 1rem;

  & h4.ant-typography,
  .ant-typography h4 {
    margin: 0;
    color: #ffffff;
  }
`;

const SiderStyled = styled(Sider)`
  position: absolute;
  top: 63px;
  transform: translate(0%, -50%);
  z-index: 999;
  & .ant-layout-sider-zero-width-trigger:hover,
  & .ant-layout-sider-zero-width-trigger,
  & .ant-menu.ant-menu-dark,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background: #ff6700;
    color: #ffffff;
    top: 24px;
  }

  & .ant-menu-dark .ant-menu-item-selected,
  & .anticon svg,
  & .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    color: #ffffff;
    & span,
    svg {
      color: #ff6700;
    }
  }

  & .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: black;
    color: #ff6700;
  }
`;

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  const handleRoute = (page) => {
    switch (page) {
      case "home":
        return history.push("/");
      case "workout":
        return history.push("/workout");
      case "setting-workout":
        return history.push("/setting-workout");
      case "sign-out":
        return firebase.auth().signOut();
      default:
        break;
    }

    setCollapsed(true);
  };

  return (
    <Wrapper>
      <div onClick={() => handleRoute("home")}>
        <HeaderStyled level={4}>FIT FOR FRIENDS</HeaderStyled>
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
          <Menu.Item key="3" onClick={() => handleRoute("sign-out")}>
            <SettingOutlined />
            <span className="nav-text">ออกจากระบบ</span>
          </Menu.Item>
        </Menu>
      </SiderStyled>
    </Wrapper>
  );
};

export default Header;
