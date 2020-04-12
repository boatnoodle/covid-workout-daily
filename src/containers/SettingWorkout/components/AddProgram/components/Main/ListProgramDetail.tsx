import React from "react";
import styled from "styled-components";

import { Typography, List } from "antd";

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
  }
  &&& .ant-list-item:last-child {
    border-bottom: 1px solid;
  }
`;

interface ProgramDetail {
  name: string;
  amount: number;
  enableTime: boolean;
  timeObj: {
    activeTime: number | null;
    restTime: number | null;
  };
}

export const ListProgramDetail = ({ programDetail }) => {
  return (
    <>
      {programDetail.length > 0 ? (
        <ListStyled
          header={<Title level={4}>ตารางการออกกำลังกายคุณ</Title>}
          bordered
          dataSource={programDetail}
          renderItem={(item: ProgramDetail) => (
            <List.Item>
              {item.name} x {item.amount}{" "}
              {item.enableTime && (
                <div>
                  {`เล่น ${item.timeObj.activeTime || "-"} นาที / พัก ${
                    item.timeObj.restTime || "-"
                  } นาที`}
                </div>
              )}
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
