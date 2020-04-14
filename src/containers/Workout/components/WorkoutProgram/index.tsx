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

export const WorkoutProgram = ({ program }) => {
  const router = useHistory();
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [percent, setPercent] = useState(0);
  const [counter, setCounter] = useState(0);
  const [workoutPlaying, setWorkoutPlaying] = useState(null);
  const [indexWorkoutPlaying, setIndexWorkoutPlaying] = useState(0);
  const [amountWorkoutPlaying, setAmountWorkoutPlaying] = useState(0);

  const toSec = (min) => min * 60;

  const activeTime = toSec(workoutPlaying?.timeObj?.activeTime);
  const restTime = toSec(workoutPlaying?.timeObj?.restTime);
  const programDetail = program?.programDetail;

  useInterval(
    () => {
      if (activeTime && counter <= activeTime) {
        calProgress(activeTime);
        console.log("activetime =>", counter);
      } else if (restTime && counter <= restTime) {
        calProgress(restTime);
        console.log("resttime =>", counter);
      } else {
        if (activeTime && activeTime === counter) {
          setWorkoutPlaying({
            ...workoutPlaying,
            timeObj: { ...workoutPlaying.timeObj, activeTime: null },
          });
          setCounter(0);
          console.log("end active time =>", counter);
        } else if (restTime && restTime === counter) {
          setWorkoutPlaying({
            ...workoutPlaying,
            timeObj: { ...workoutPlaying.timeObj, restTime: null },
          });
          setCounter(0);
          console.log("end rest time =>", counter);
        } else {
          if (workoutPlaying.amount !== amountWorkoutPlaying) {
            setWorkoutPlaying({
              ...workoutPlaying,
              timeObj: {
                activeTime:
                  programDetail?.[indexWorkoutPlaying]?.timeObj?.activeTime,
                restTime:
                  programDetail?.[indexWorkoutPlaying]?.timeObj?.restTime,
              },
            });
            setAmountWorkoutPlaying(amountWorkoutPlaying + 1);
            setCounter(0);
            console.log("now set is =>", amountWorkoutPlaying + 1);
          } else if (programDetail?.[indexWorkoutPlaying + 1]) {
            setCounter(0);
            setWorkoutPlaying(programDetail?.[indexWorkoutPlaying + 1]);
            setIndexWorkoutPlaying(indexWorkoutPlaying + 1);
            console.log("next workout =>", counter);
          } else {
            setIsRunning(false);
            console.log("finish workout =>", counter);
          }
        }
      }
    },
    isRunning && workoutPlaying ? delay : null
  );

  const calProgress = (sec) => {
    const percent = Math.round((counter * 100) / sec);
    setCounter(counter + 1);
    setPercent(percent);
  };

  const calSecond = (percent) => {
    const second = Math.round((percent * 60) / 100);
    return second;
  };

  const handleStart = () => {
    setIsRunning(true);
    setWorkoutPlaying(programDetail?.[indexWorkoutPlaying]);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  // console.log(program);

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
