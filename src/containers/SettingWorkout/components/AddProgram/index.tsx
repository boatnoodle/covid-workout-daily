import React, { useState, useEffect } from "react";

import { Formik } from "formik";
import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { message } from "antd";
import { getExercises, addProgram } from "services/firebase";
import { useSession } from "hooks/auth/useSession";

const actionConst = {
  main: "main",
  selectExercise: "selectExercise",
};

export const AddProgram = ({ setMode, modePage }) => {
  const { user } = useSession();
  const [action, setAction] = useState(actionConst.main);
  const [exercises, setExsercises] = useState(null);
  const initialState = {
    user,
    programName: null,
    programDetail: [
      // {
      //   day: "จันทร์",
      //   name: "Barbell bench press",
      //   amount: 4,
      //   enableTime: false,
      // },
      // {
      // day: "อังคาร",
      //   name: "Dumbbell curl",
      //   amount: 4,
      //   enableTime: false,
      //   timeObj: {
      //     activeTime: null,
      //     restTime: null,
      //   },
      // },
    ],
  };

  const handleSubmit = async (values) => {
    await addProgram(values);
    message.success("บันทึกโปรแกรมสำเร็จ");
    setMode(modePage.list);
  };

  useEffect(() => {
    console.log("call");
    getExercises(setExsercises);
  }, []);

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      {({ values, handleSubmit }) => {
        return (
          <>
            {action === actionConst.main ? (
              <Main
                setAction={setAction}
                action={actionConst}
                handleSubmit={handleSubmit}
              />
            ) : (
              <Detail
                datas={exercises}
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
