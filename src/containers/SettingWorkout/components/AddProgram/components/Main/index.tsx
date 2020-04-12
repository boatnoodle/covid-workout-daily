import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Formik } from "formik";
import { Form as FormAnt, Typography, Divider, Steps, List } from "antd";
import { getExercise } from "services/firebase";
import { PrimaryButton } from "components/Button";
import { Form } from "./Form";

const { Step } = Steps;
const { Title } = Typography;

const StepsStyled = styled(Steps)`
  position: sticky;
  top: 73px;
  z-index: 999;
  padding: 0.5rem 0;
  background: black;
  & .ant-steps-item-process .ant-steps-item-icon {
    background: #8cb90b;
    border-color: #8cb90b;
    & span {
      color: black;
    }
  }
  & .ant-steps-item-wait .ant-steps-item-icon {
    background: black;
    border-color: #8cb90b;
  }

  & .ant-steps-item-icon > .ant-steps-icon {
    color: #8cb90b;
  }
  &&& .ant-steps-item-title {
    font-size: 0.8rem;
    color: #8cb90b;
  }
`;

export const Main = ({ setAction, action, workoutDetail }) => {
  // console.log(workoutDetail, "xxx");
  const [exercies, setExercise] = useState(null);
  const initialState = {
    programName: null,
    detail: {
      workoutName: null,
      amountSet: null,
      enableTime: false,
      timeObj: {
        activeTime: null,
        restTime: null,
      },
    },
    programDetail: [],
  };

  const handleSubmit = () => {};

  useEffect(() => {
    getExercise(setExercise);
  }, []);

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      {({ values }) => {
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

            {values.programDetail.length > 0 ? (
              <List
                header={<Title level={4}>รายการ</Title>}
                bordered
                dataSource={[]}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            ) : (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Title level={4}>ยังไม่มีท่าออกกำลังกาย</Title>
              </div>
            )}
          </>
        );
      }}
    </Formik>
  );
};
