import React, { useState, useEffect } from "react";

import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { getExercise } from "services/firebase";

const actionConst = {
  main: "main",
  selectExercise: "selectExercise",
};

export const AddProgram = () => {
  const [action, setAction] = useState(actionConst.main);
  const [workoutDetail, setWorkoutDetail] = useState(null);
  const [exercise, setExsercise] = useState(null);

  useEffect(() => {
    getExercise(setExsercise);
  }, []);

  return action === actionConst.main ? (
    <Main
      setAction={setAction}
      action={actionConst}
      workoutDetail={workoutDetail}
    />
  ) : (
    <Detail
      datas={exercise}
      setAction={setAction}
      action={actionConst}
      setWorkoutDetail={setWorkoutDetail}
    />
  );
};
