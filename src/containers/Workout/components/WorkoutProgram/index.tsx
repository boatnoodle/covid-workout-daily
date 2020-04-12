import React, { useEffect, useState } from "react";
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
  const [percent, setPercent] = useState(0);
  const timer = (seconds, cb, counter = 0) => {
    const counterTime = counter;
    const remaningTime = seconds;
    window.setTimeout(function () {
      cb();
      calProgress(counterTime);
      if (remaningTime > 0) {
        timer(remaningTime - 1, cb, counterTime + 1);
      }
    }, 1000);
  };

  const callback = () => {
    // console.log("time change");
  };

  const calProgress = (sec) => {
    const percent = Math.round((sec * 100) / 60);
    setPercent(percent);
  };

  const calSecond = (percent) => {
    const second = Math.round((percent * 60) / 100);
    return second;
  };

  const handleStart = () => {
    timer(60, callback);
  };

  return (
    <Wrapper>
      <DetailWorkout>ท่า .... เซตที่ 1/4</DetailWorkout>
      <ProgressStyled
        width={280}
        type="circle"
        percent={percent}
        format={(percent) => `${calSecond(percent)} วิ`}
      />
      <ButtonStart onClick={handleStart}>เริ่ม</ButtonStart>
      <ButtonStop>หยุด</ButtonStop>
    </Wrapper>
  );
};
