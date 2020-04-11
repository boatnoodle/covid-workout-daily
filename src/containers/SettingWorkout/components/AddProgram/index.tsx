import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Formik, Field } from "formik";
import { Form, Typography, Divider, Steps } from "antd";
import { ListExercise } from "./components/ListsExercise";
import { getExercise } from "services/firebase";

const { Step } = Steps;

const StepsStyled = styled(Steps)`
  position: sticky;
  top: 90px;
  z-index: 999;
  background: black;
  & .ant-steps-item-process .ant-steps-item-icon {
    background: #8cb90b;
    border-color: #8cb90b;
    & span {
      color: black;
    }
  }
  & .ant-steps-item-wait .ant-steps-item-icon {
    background: black;
    border-color: #8cb90b;
  }

  & .ant-steps-item-icon > .ant-steps-icon {
    color: #8cb90b;
  }
  &&& .ant-steps-item-title {
    font-size: 0.8rem;
    color: #8cb90b;
  }
`;

export const AddProgram = () => {
  const [exercies, setExercise] = useState(null);
  // const initialValues = {};

  // const handleSubmit = () => {};

  useEffect(() => {
    getExercise(setExercise);
  }, []);

  console.log(exercies, "xx");

  return (
    <>
      <StepsStyled direction="vertical" current={0}>
        <Step title="เลือกท่าออกกำลังกาย" />
        <Step title="วางแผนจำนวนเซ็ต" />
        <Step title="วางแผนเวลา" />
      </StepsStyled>
      <Divider />
      <ListExercise />
    </>
  );
};
