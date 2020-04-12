import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

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

function useInterval(callback, delay) {
  const savedCallback = useRef() as any;

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const WorkoutProgram = () => {
  const router = useHistory();
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [percent, setPercent] = useState(0);
  const [counter, setCounter] = useState(1);

  useInterval(
    () => {
      if (counter <= 60) {
        calProgress();
      } else {
        setIsRunning(false);
      }
    },
    isRunning ? delay : null
  );

  const calProgress = () => {
    const percent = Math.round((counter * 100) / 60);
    setCounter(counter + 1);
    setPercent(percent);
  };

  const calSecond = (percent) => {
    const second = Math.round((percent * 60) / 100);
    return second;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  console.log(counter);

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
      <ButtonStop onClick={handleStop}>หยุด</ButtonStop>
    </Wrapper>
  );
};
