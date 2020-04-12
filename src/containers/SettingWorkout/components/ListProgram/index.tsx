import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Collapse, Divider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  & .ant-collapse-header {
    background: #8cb909;
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

export const ListProgram = ({ datas }) => {
  console.log(datas, "datas");
  return (
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
            header={item.programName}
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
                      } นาที / พัก ${item2.timeObj.restTime || "ไม่ระบุ"} นาที`}
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
  );
};
