import React, { useState, useEffect } from "react";
import firebase from "firebase";

import { Formik } from "formik";
import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { getExercise } from "services/firebase";
import { useFirebase } from "components/Firebase/useFirebase";
import { message } from "antd";

const actionConst = {
  main: "main",
  selectExercise: "selectExercise",
};

export const AddProgram = ({ setMode, modePage }) => {
  const firebaseAuth = useFirebase();
  const [action, setAction] = useState(actionConst.main);
  const [exercise, setExsercise] = useState(null);
  const initialState = {
    programName: null,
    programDetail: [
      // {
      //   name: "Barbell bench press",
      //   amount: 4,
      //   enableTime: true,
      //   timeObj: {
      //     activeTime: 1,
      //     restTime: 1,
      //   },
      // },
      // {
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

  const handleSubmit = (values) => {
    const payload = {
      ...values,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    };

    firebaseAuth.db
      .collection("programWorkout")
      .add(payload)
      .then(function () {
        message.success("บันทึกโปรแกรมสำเร็จ");
        setMode(modePage.list);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    getExercise(setExsercise);
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
