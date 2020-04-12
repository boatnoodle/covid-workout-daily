import React from "react";
import styled from "styled-components";

import { Progress, Button } from "antd";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: "1fr 1fr";
  row-gap: 1rem;
  grid-template-areas:
    "detailWorkout detailWorkout"
    "progress progress"
    "btnStart btnStop";
  justify-content: center;
`;

const ProgressStyled = styled(Progress)`
  grid-area: progress;
  text-align: center;
  & .ant-progress-text {
    color: #8cb909;
    font-size: 4rem;
  }
`;
const DetailWorkout = styled.div`
  grid-area: detailWorkout;
`;

const ButtonStart = styled(Button)`
  grid-area: btnStart;
`;
const ButtonStop = styled(Button)`
  grid-area: btnStop;
`;

export const WorkoutProgram = () => {
  return (
    <Wrapper>
      <DetailWorkout>ท่า .... เซตที่ 1/4</DetailWorkout>
      <ProgressStyled
        width={280}
        type="circle"
        percent={75}
        format={(percent) => `${percent} วิ`}
      />
      <ButtonStart>เริ่ม</ButtonStart>
      <ButtonStop>หยุด</ButtonStop>
    </Wrapper>
  );
};
