import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Typography, Divider, Spin } from "antd";
// import { getProgramWorkout } from "services/firebase";
import { PrimaryButton } from "components/Button";
import { ListProgram } from "./components/ListProgram";
import { AddProgram } from "./components/AddProgram";

const { Title } = Typography;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;
const modePage = {
  list: "list",
  add: "add",
};

export const SettingWorkout = () => {
  const [programs, setProgram] = useState(null);
  const [mode, setMode] = useState(modePage.list);

  useEffect(() => {
    // getProgramWorkout(setProgram);
  }, [mode]);

  useEffect(() => {
    // getProgramWorkout(setProgram);
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
      <Title level={3}>โปรแกรมของคุณ</Title>
      {programs ? <ListProgram datas={programs} /> : <Spin size="large" />}
    </Wrapper>
  );
};
