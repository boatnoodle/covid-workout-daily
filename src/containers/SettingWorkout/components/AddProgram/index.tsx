import React, { useState, useEffect } from "react";

import { Formik } from "formik";
import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { getExercise } from "services/firebase";

const actionConst = {
  main: "main",
  selectExercise: "selectExercise",
};

export const AddProgram = () => {
  const [action, setAction] = useState(actionConst.main);
  const [exercise, setExsercise] = useState(null);
  const initialState = {
    programName: null,
    programDetail: [
      {
        name: "Barbell bench press",
        amount: 4,
        enableTime: true,
        timeObj: {
          activeTime: 1,
          restTime: 1,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
      {
        name: "Dumbbell curl",
        amount: 4,
        enableTime: false,
        timeObj: {
          activeTime: null,
          restTime: null,
        },
      },
    ],
  };

  const handleSubmit = () => {};

  useEffect(() => {
    getExercise(setExsercise);
  }, []);

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      {({ values }) => {
        console.log(values, "values");
        return (
          <>
            {action === actionConst.main ? (
              <Main setAction={setAction} action={actionConst} />
            ) : (
              <Detail
                datas={exercise}
                setAction={setAction}
                action={actionConst}
              />
            )}
          </>
        );
      }}
    </Formik>
  );
};
