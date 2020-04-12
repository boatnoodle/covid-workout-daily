import React from "react";

import { useFormikContext } from "formik";
import { Typography, Divider, List } from "antd";
import { PrimaryButton } from "components/Button";
import { Form } from "./Form";

const { Title } = Typography;

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
};
