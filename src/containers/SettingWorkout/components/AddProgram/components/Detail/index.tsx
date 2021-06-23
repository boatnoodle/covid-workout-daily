import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useFormikContext } from "formik";
import { Typography, Divider, Steps } from "antd";
import { PrimaryButton } from "components/Button";
import { RightOutlined } from "@ant-design/icons";
import { SelectExercise } from "./SelectExercise";
import { AmountExercise } from "./AmountExercise";
import { DayExercise } from "./SelectDay";

const { Step } = Steps;
const { Title } = Typography;

const WrapperSticky = styled.div`
  position: sticky;
  top: 73px;
  z-index: 5;
  padding: 0.5rem 0;
  background: #ffffff;
`;

const WrapperButton = styled.div`
  display: grid;
  justify-content: flex-end;
`;

const StepsStyled = styled(Steps)`
  & .ant-steps-item-process .ant-steps-item-icon {
    background: #ff6700;
    border-color: #ff6700;
    & span {
      color: #ffffff;
    }
  }
  & .ant-steps-item-wait .ant-steps-item-icon {
    background: #ffffff;
    border-color: #ff6700;
  }

  & .ant-steps-finish-icon {
    color: #ffffff;
  }

  & .ant-steps-item-icon > .ant-steps-icon {
    color: #ff6700;
  }
  &&& .ant-steps-item-title {
    font-size: 0.8rem;
    color: #ff6700;
  }
  & .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #ff6700;
    border-color: #ff6700;
    color: #ffffff;
  }

  &
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background-color: #ff6700;
  }
`;

export const Detail = ({ datas, setAction, action }) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const [step, setStep] = useState(0);
  const [detail, setDetail] = useState({
    name: null,
    day: null,
    amount: null,
    enableTime: false,
    timeObj: null,
  });

  const handleChange = (current) => {
    setStep(current);
  };

  const handleDayExercise = (value) => {
    setDetail({ ...detail, day: value });
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
        return <Title level={4}>เลือกวันที่ต้องการออกกำลังกาย</Title>;
      case 1:
        return <Title level={4}>เลือกท่าออกกำลังกาย</Title>;
      case 2:
        return <Title level={4}>วางแผนจำนวนเซ็ต</Title>;
      // case 3:
      //   return <Title level={4}>วางแผนเวลา</Title>;
      default:
        break;
    }
  };

  const stepDisplayContent = () => {
    switch (step) {
      case 0:
        return <DayExercise handleDayExercise={handleDayExercise} />;
      case 1:
        return datas ? (
          <SelectExercise
            datas={datas}
            handleSelectExercise={handleSelectExercise}
          />
        ) : (
          <div>Loading...</div>
        );
      case 2:
        return <AmountExercise handleAmountExercise={handleAmountExercise} />;
      // case 3:
      //   return <TimeExercise handleTimeExercise={handleTimeExercise} />;
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
          <Step title="เลือกวันที่ออกกำลังกาย" />
          <Step title="เลือกท่าออกกำลังกาย" />
          <Step title="วางแผนจำนวนเซ็ต" />
          {/* <Step title="วางแผนเวลา" /> */}
        </StepsStyled>
        <WrapperButton>{nextStepButton()}</WrapperButton>
        <Divider />
      </WrapperSticky>
      {stepDisplayHeader()}
      {stepDisplayContent()}
    </>
  );
};
