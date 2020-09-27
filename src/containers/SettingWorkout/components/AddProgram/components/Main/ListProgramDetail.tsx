import React from "react";
import styled from "styled-components";

import { Typography, List, Popconfirm, message, Row, Col, Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useFormikContext } from "formik";
import { days } from "containers/SettingWorkout/components/AddProgram/components/Detail/SelectDay";

const { Title } = Typography;

const DeleteButton = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  color: red;
  text-decoration: underline;
`;

const WrapperDetail = styled.div`
  :before {
    content: "";
    width: 10px;
    height: 10px;
    background: orange;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translate(0, -50%);
  }
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.85);
  padding-left: 1rem;
`;

const DarkText = styled.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.85);
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
      {days.map((day, index) => {
        const filterExercisesByDay = programDetail?.filter(
          (item) => item.day === day
        );
        return (
          <React.Fragment key={index}>
            <Row>
              <Col span={24}>
                <Title level={4}>{`วัน ${day}`}</Title>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              {filterExercisesByDay.length > 0 ? (
                filterExercisesByDay?.map((item, index) => {
                  return (
                    <Col span={24}>
                      <WrapperDetail>
                        {item.name} x {item.amount}
                        {" เซต"}
                        {item.enableTime && (
                          <div>
                            {`เล่น ${
                              item.timeObj.actionTime || "ไม่ระบุ"
                            } นาที / พัก ${
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
                      </WrapperDetail>
                    </Col>
                  );
                })
              ) : (
                <DarkText>-</DarkText>
              )}
            </Row>
          </React.Fragment>
        );
      })}
    </>
  );
};
