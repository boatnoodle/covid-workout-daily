import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Typography, Divider, Row, Col } from "antd";
import { getPrograms } from "services/firebase";
import { PrimaryButton } from "components/Button";
import { ListProgram } from "./components/ListProgram";
import { AddProgram } from "./components/AddProgram";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;

const WrapperNoData = styled.div`
  &,
  .ant-typography {
    color: #bfbfbf;
  }
`;

const modePage = {
  list: "list",
  add: "add",
};

export const SettingWorkout = () => {
  const [programs, setProgram] = useState(null);
  const [mode, setMode] = useState(modePage.list);

  useEffect(() => {
    getPrograms(setProgram);
  }, [mode]);

  useEffect(() => {
    getPrograms(setProgram);
  }, []);

  const handleMode = (mode) => {
    switch (mode) {
      case modePage.list:
        setMode(modePage.list);
        break;
      case modePage.add:
        setMode(modePage.add);
        break;
      default:
        break;
    }
  };
  console.log(programs, "programs");

  if (!mode && !programs) {
    return (
      <Wrapper>
        <Title level={4}>ยังไม่มีโปรแกรมการออกกำลังกาย</Title>
        <PrimaryButton onClick={() => handleMode(modePage.add)}>
          สร้างโปรแกรมออกกำลังกาย
        </PrimaryButton>
      </Wrapper>
    );
  } else if (mode === modePage.add) {
    return <AddProgram setMode={setMode} modePage={modePage} />;
  }
  return (
    <Wrapper>
      <PrimaryButton onClick={() => handleMode(modePage.add)}>
        สร้างโปรแกรมออกกำลังกาย
      </PrimaryButton>
      <Divider />
      {programs ? (
        <>
          <Title level={3}>โปรแกรมของคุณ</Title>
          <ListProgram datas={programs} />
        </>
      ) : (
        <WrapperNoData>
          <Row justify="center">
            <Col>
              <ExclamationCircleOutlined />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Title level={4}>ยังไม่มีโปรแกรม</Title>
            </Col>
          </Row>
        </WrapperNoData>
      )}
    </Wrapper>
  );
};
