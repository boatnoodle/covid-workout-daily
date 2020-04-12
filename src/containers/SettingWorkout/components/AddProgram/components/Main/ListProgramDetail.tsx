import React from "react";
import styled from "styled-components";

import { Typography, List, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useFormikContext } from "formik";

const { Title } = Typography;

const ListStyled = styled(List)`
  background: transparent;
  margin-top: 20px;
  border: none;
  & .ant-list-header {
    padding: 0;
    text-align: left;
  }
  & .ant-list-item {
    color: white;
    padding-left: 0;
    font-size: 0.8rem;
    position: relative;
  }
  &&& .ant-list-item:last-child {
    border-bottom: 1px solid;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  color: red;
  text-decoration: underline;
`;

interface ProgramDetail {
  name: string;
  amount: number;
  enableTime: boolean;
  timeObj: {
    actionTime: number | null;
    restTime: number | null;
  };
}

export const ListProgramDetail = ({ programDetail }) => {
  console.log(programDetail, "programDetail");
  const { setFieldValue, values } = useFormikContext<any>();

  const handleDelete = (indexDelete) => {
    const programDetail = values.programDetail.filter(
      (_, index) => index !== indexDelete
    );

    message.success("ลบท่าออกกำลังกายเรียบร้อยแล้ว");
    setFieldValue("programDetail", programDetail);
  };

  return (
    <>
      {programDetail.length > 0 ? (
        <ListStyled
          header={<Title level={4}>ตารางการออกกำลังกายคุณ</Title>}
          bordered
          dataSource={programDetail}
          renderItem={(item: ProgramDetail, index) => (
            <List.Item key={index}>
              {item.name} x {item.amount}
              {" เซต"}
              {item.enableTime && (
                <div>
                  {`เล่น ${item.timeObj.actionTime || "ไม่ระบุ"} นาที / พัก ${
                    item.timeObj.restTime || "ไม่ระบุ"
                  } นาที`}
                </div>
              )}
              <Popconfirm
                title="คุณต้องการลบหรือไม่ ?"
                onConfirm={() => handleDelete(index)}
                okText="ใช่"
                cancelText="ไม่"
              >
                <DeleteButton>
                  <DeleteOutlined />
                </DeleteButton>
              </Popconfirm>
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
