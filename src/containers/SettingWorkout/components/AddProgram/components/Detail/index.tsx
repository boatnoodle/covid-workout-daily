import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useFormikContext } from "formik";
import { Typography, Divider, Steps } from "antd";
import { PrimaryButton } from "components/Button";
import { RightOutlined } from "@ant-design/icons";
import { SelectExercise } from "./SelectExercise";
import { AmountExercise } from "./AmountExercise";
import { TimeExercise } from "./TimeExercise";

const { Step } = Steps;
const { Title } = Typography;

const WrapperSticky = styled.div`
  position: sticky;
  top: 73px;
  z-index: 999;
  padding: 0.5rem 0;
  background: black;
`;

const WrapperButton = styled.div`
  display: grid;
  justify-content: flex-end;
`;

const StepsStyled = styled(Steps)`
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
  & .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #4b6501;
    border-color: #4b6501;
  }

  &
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background-color: #4b6501;
  }
`;

export const Detail = ({ datas, setAction, action }) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const [step, setStep] = useState(0);
  const [detail, setDetail] = useState({
    name: null,
    amount: null,
    enableTime: false,
    timeObj: null,
  });

  const handleChange = (current) => {
    setStep(current);
  };

  const handleSelectExercise = (value) => {
    setDetail({ ...detail, name: value });
  };

  const handleAmountExercise = (value) => {
    setDetail({ ...detail, amount: value });
  };

  const handleTimeExercise = (obj) => {
    setDetail({
      ...detail,
      enableTime: obj?.enableTime,
      timeObj: obj?.timeObj,
    });
  };

  const stepDisplayHeader = () => {
    switch (step) {
      case 0:
        return <Title level={4}>เลือกท่าออกกำลังกาย</Title>;
      case 1:
        return <Title level={4}>วางแผนจำนวนเซ็ต</Title>;
      case 2:
        return <Title level={4}>วางแผนเวลา</Title>;
      default:
        break;
    }
  };

  const stepDisplayContent = () => {
    switch (step) {
      case 0:
        return datas ? (
          <SelectExercise
            datas={datas}
            handleSelectExercise={handleSelectExercise}
          />
        ) : (
          <div>Loading...</div>
        );
      case 1:
        return <AmountExercise handleAmountExercise={handleAmountExercise} />;
      case 2:
        return <TimeExercise handleTimeExercise={handleTimeExercise} />;
      default:
        break;
    }
  };

  const nextStepButton = () => {
    if (step <= 2) {
      const nextStep = step + 1;
      return (
        <PrimaryButton
          icon={<RightOutlined />}
          style={{ textAlign: "right" }}
          onClick={() => setStep(nextStep)}
        >
          ต่อไป
        </PrimaryButton>
      );
    }

    if (step === 3) {
      addWorkoutDetail();
      setAction(action.main);
    }
  };

  const addWorkoutDetail = () => {
    setFieldValue("programDetail", [...values.programDetail, detail]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <>
      <WrapperSticky>
        <StepsStyled
          direction="vertical"
          current={step}
          onChange={handleChange}
        >
          <Step title="เลือกท่าออกกำลังกาย" />
          <Step title="วางแผนจำนวนเซ็ต" />
          <Step title="วางแผนเวลา" />
        </StepsStyled>
        <WrapperButton>{nextStepButton()}</WrapperButton>
        <Divider />
      </WrapperSticky>
      {stepDisplayHeader()}
      {stepDisplayContent()}
    </>
  );
};
