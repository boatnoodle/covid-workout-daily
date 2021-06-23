import React, { useState } from "react";
import styled from "styled-components";
import firebase from "utils/firebase";

import { useHistory } from "react-router-dom";
import { Avatar, Col, Dropdown, Layout, Menu, Row, Typography } from "antd";
import {
  FireOutlined,
  SettingOutlined,
  CaretDownOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useSession } from "hooks/auth/useSession";

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

const StyledMainDropdown = styled(Dropdown)`
  font-size: 1rem;
  color: #ffffff;
`;

const StyledDropdown = styled(Dropdown)`
  font-size: 0.5rem;
  color: #ffffff;
`;

const Header = () => {
  const { user } = useSession();
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

  const menuUser = (
    <Menu>
      <Menu.Item key="0">
        <a href="">ข้อมูลส่วนตัว</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a href="" onClick={() => firebase.auth().signOut()}>
          ออกจากระบบ
        </a>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => history.push("/setting-workout")}>
          ตั้งค่าโปรแกรมของคุณ
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => history.push("/workout")}>ออกกำลังกาย</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <Row align="middle">
        <Col>
          <StyledMainDropdown overlay={menu} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <UnorderedListOutlined />
            </div>
          </StyledMainDropdown>
        </Col>
        <Col flex="auto">
          <a onClick={() => history.push("/")}>
            <HeaderStyled level={4}>FIT FOR FRIENDS</HeaderStyled>
          </a>
        </Col>
        <Col>
          <StyledDropdown overlay={menuUser} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Avatar size="default" src={user?.photoURL} />
              <CaretDownOutlined />
            </div>
          </StyledDropdown>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Header;
