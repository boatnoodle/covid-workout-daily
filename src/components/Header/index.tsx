import React from "react";
import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background: black;
  padding: 1rem;

  & h4.ant-typography,
  .ant-typography h4 {
    color: yellow;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title level={4}>COVID WORKOUT</Title>
    </Wrapper>
  );
};

export default Header;
