import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: calc(1280px + 16px * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export const LayoutAuth: React.FC<any> = ({ children }) => {
  return <Container>{children}</Container>;
};
