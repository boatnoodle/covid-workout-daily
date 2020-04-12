import React from "react";

import { useFormikContext } from "formik";
import { Typography, Divider, List } from "antd";
import { PrimaryButton } from "components/Button";
import { Form } from "./Form";
import { ListProgramDetail } from "./ListProgramDetail";

const { Title } = Typography;

interface ProgramDetail {
  name: string;
  amount: number;
  enableTime: boolean;
  timeObj: {
    activeTime: number | null;
    restTime: number | null;
  };
}

export const Main = ({ setAction, action }) => {
  const { values } = useFormikContext<any>();

  return (
    <>
      <Form />
      <Divider />

      <PrimaryButton
        disabled={!values.programName}
        style={{ marginBottom: "20px" }}
        onClick={() => setAction(action.selectExercise)}
      >
        เพิ่มท่าออกกำลังกาย
      </PrimaryButton>

      <ListProgramDetail programDetail={values.programDetail} />
    </>
  );
};
