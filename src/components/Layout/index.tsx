import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Container = styled.div`
  max-width: calc(1280px + 16px * 2);
  /* max-width: calc(768px + 16px * 2); */
  margin: 1rem auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
