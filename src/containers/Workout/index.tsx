import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Spin, Typography } from "antd";
import { getProgramWorkout } from "services/firebase";
import { SelectProgram } from "./components/SelectProgram";
import { WorkoutProgram } from "./components/WorkoutProgram";

const { Title } = Typography;
const actionConst = {
  selectProgram: "selectProgram",
  workout: "workout",
};

export const Workout = () => {
  const [program, setProgram] = useState(null);
  const [action, setAction] = useState(actionConst.workout);
  const [programWorkout, setProgramWorkout] = useState(null);

  const DisplayWithAction = () => {
    switch (action) {
      case actionConst.selectProgram:
        return !programWorkout ? (
          <Spin size="large" />
        ) : programWorkout && programWorkout.length === 0 ? (
          <Title level={4}>ยังไม่มีโปรแกรมการออกกำลังกาย</Title>
        ) : (
          <SelectProgram datas={programWorkout} setProgram={setProgram} />
        );
      case actionConst.workout:
        return <WorkoutProgram />;
      default:
        break;
    }
  };

  useEffect(() => {
    if (program) {
      setAction(actionConst.workout);
    }
  }, [program]);

  useEffect(() => {
    getProgramWorkout(setProgramWorkout);
  }, []);

  return <DisplayWithAction />;
};
