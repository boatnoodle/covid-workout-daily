import React from "react";

import { useFormikContext } from "formik";
import { Divider } from "antd";
import { PrimaryButton } from "components/Button";
import { Form } from "./Form";
import { ListProgramDetail } from "./ListProgramDetail";
import { SaveOutlined, UnorderedListOutlined } from "@ant-design/icons";

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
        icon={<UnorderedListOutlined />}
      >
        เพิ่มท่าออกกำลังกาย
      </PrimaryButton>
      <PrimaryButton
        disabled={!values.programName || values.programDetail.length === 0}
        style={{ marginBottom: "20px" }}
        onClick={() => setAction(action.selectExercise)}
        icon={<SaveOutlined />}
      >
        บันทึกโปรแกรม
      </PrimaryButton>

      <ListProgramDetail programDetail={values.programDetail} />
    </>
  );
};
