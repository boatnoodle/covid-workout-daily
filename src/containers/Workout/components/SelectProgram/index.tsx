import React, { useState } from "react";
import styled from "styled-components";

import { Collapse, Divider, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { PrimaryButton } from "components/Button";

const { Panel } = Collapse;
const { Title } = Typography;

const ButtonStyled = styled(PrimaryButton)`
  && {
    height: 30px;
  }
`;

const PanelStyled = styled(Panel)`
  && .ant-collapse-header {
    background: black;
    color: #8cb909;
  }
  & .ant-collapse-content-box {
    background: black;
    color: #8cb909;
    font-size: 0.8rem;
    border: 1px solid;
  }

  & .ant-collapse-content-box div:first-child {
    margin-top: 15px;
  }
`;

const TimeText = styled.div`
  color: #c9cdd0;
`;

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const SelectProgram = ({ datas, setProgram }) => {
  return (
    <>
      <Title style={{ marginBottom: "15px" }} level={4}>
        เลือกโปรแกรมออกกำลังกาย
      </Title>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {datas.map((item, index) => {
          return (
            <PanelStyled
              key={index}
              header={
                <HeaderStyled>
                  <div>{item.programName}</div>
                  <ButtonStyled onClick={() => setProgram(item)}>
                    เลือก
                  </ButtonStyled>
                </HeaderStyled>
              }
              className="site-collapse-custom-panel"
            >
              {item.programDetail.map((item2, index2) => {
                return (
                  <div key={index2}>
                    {item2.name} x {item2.amount}
                    {" เซต"}
                    {item2.enableTime && (
                      <TimeText>
                        {`เล่น ${
                          item2.timeObj.actionTime || "ไม่ระบุ"
                        } นาที / พัก ${
                          item2.timeObj.restTime || "ไม่ระบุ"
                        } นาที`}
                      </TimeText>
                    )}
                    <Divider />
                  </div>
                );
              })}
            </PanelStyled>
          );
        })}
      </Collapse>
    </>
  );
};
