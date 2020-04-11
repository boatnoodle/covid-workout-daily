import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Formik, Field } from "formik";
import { Form, Typography, Divider, Steps } from "antd";
import { InputText, InputPassword } from "components/Input";

const { Step } = Steps;
const { Title } = Typography;

const StepsStyled = styled(Steps)`
  /* & .ant-steps-item-container {
    height: 80px;
  } */
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
  const initialValues = {};

  const handleSubmit = () => {};

  return (
    <>
      <StepsStyled direction="vertical" current={0}>
        <Step title="เลือกท่าออกกำลังกาย" />
        <Step title="วางแผนจำนวนเซ็ต" />
        <Step title="วางแผนเวลา" />
      </StepsStyled>
    </>
  );
};
