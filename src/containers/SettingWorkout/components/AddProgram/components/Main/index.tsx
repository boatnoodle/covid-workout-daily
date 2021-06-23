import React from "react";

import { useFormikContext } from "formik";
import { Divider } from "antd";
import { PrimaryButton } from "components/Button";
import { Form } from "./Form";
import { ListProgramDetail } from "./ListProgramDetail";
import { SaveOutlined, UnorderedListOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface ProgramDetail {
  name: string;
  amount: number;
  enableTime: boolean;
  timeObj: {
    activeTime: number | null;
    restTime: number | null;
  };
}

const SaveProgramButton = styled(PrimaryButton)`
  && {
    margin-bottom: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    border-radius: 0;
  }
`;

export const Main = ({ setAction, action, handleSubmit }) => {
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

      <ListProgramDetail programDetail={values.programDetail} />
      <SaveProgramButton
        disabled={!values.programName || values.programDetail.length === 0}
        onClick={handleSubmit}
        icon={<SaveOutlined />}
      >
        บันทึกโปรแกรม
      </SaveProgramButton>
    </>
  );
};
