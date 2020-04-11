import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Typography } from "antd";
import { getProgramWorkouts } from "services/firebase";
import { useFirebase } from "components/Firebase/useFirebase";
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
  const [mode, setMode] = useState(modePage.add);
  const firebase = useFirebase();

  useEffect(() => {
    getProgramWorkouts(setProgram);
  }, []);

  const addData = (payload) => {
    firebase.db
      .collection("programWorkouts")
      .add(payload)
      .then(function () {
        console.log("Add success");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

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
    return <AddProgram />;
  }
  return (
    <div>
      Setting Workout
      <ListProgram datas={programs} />
    </div>
  );
};
