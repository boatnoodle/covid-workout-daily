import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List, Typography } from "antd";
import { Form as FormAnt, Switch } from "antd";
import { PrimarySelect } from "components/Select";

const { Title } = Typography;
const { Option } = PrimarySelect;

const SelectStyled = styled(PrimarySelect)`
  & .ant-select-arrow {
    color: black;
    font-size: 0.8rem;
    top: 15px;
    right: 30px;
  }
`;

const SwitchStyled = styled(Switch)`
  &.ant-switch {
    background-color: grey !important;
  }

  &&.ant-switch-checked {
    background-color: #8cb90b !important;
  }
`;

interface Item {
  name: string;
  muscleType: string;
  img: string | null;
}
const timeAction = {
  actionTime: "actionTime",
  restTime: "restTime",
};

export const TimeExercise = ({ handleTimeExercise }) => {
  const [enableTime, setEnableTime] = useState(false);
  const [timeObj, setTimeObj] = useState({} as any);

  const handleSwitch = (value) => {
    if (!value) {
      setTimeObj({
        ...timeObj,
        enableTime: false,
        timeObj: {},
      });
    }
    setEnableTime(value);
  };

  const handleTime = (type, value) => {
    if (type == timeAction.actionTime) {
      setTimeObj({
        ...timeObj,
        enableTime,
        timeObj: { ...timeObj?.timeObj, actionTime: value },
      });
    } else {
      setTimeObj({
        ...timeObj,
        enableTime,
        timeObj: { ...timeObj?.timeObj, restTime: value },
      });
    }
  };

  useEffect(() => {
    if (timeObj) {
      handleTimeExercise(timeObj);
    }
  }, [timeObj]);

  return (
    <FormAnt>
      <FormAnt.Item label="ใช้ระบบจัดเวลาหรือไม่">
        <SwitchStyled onChange={handleSwitch} />
      </FormAnt.Item>
      {enableTime && (
        <>
          <FormAnt.Item label="เวลาในการเล่น">
            <SelectStyled
              onChange={(value) => handleTime(timeAction.actionTime, value)}
              suffixIcon={"นาที"}
            >
              <Option value={null}>ไม่ระบุเวลา</Option>
              {[...Array(20).keys()].map((i, index) => (
                <Option value={i + 1} key={index}>
                  {i + 1}
                </Option>
              ))}
            </SelectStyled>
          </FormAnt.Item>
          <FormAnt.Item label="เวลาในการพักเซต">
            <SelectStyled
              onChange={(value) => handleTime(timeAction.restTime, value)}
              suffixIcon={"นาที"}
            >
              <Option value="">ไม่ระบุเวลา</Option>
              {[...Array(20).keys()].map((i, index) => (
                <Option value={i + 1} key={index}>
                  {i + 1}
                </Option>
              ))}
            </SelectStyled>
          </FormAnt.Item>
        </>
      )}
    </FormAnt>
  );
};
