import React, { useState } from "react";
import styled from "styled-components";
import { List, Typography } from "antd";
import { Form as FormAnt, Select } from "antd";

const { Option } = Select;
const { Title } = Typography;

const SelectStyled = styled(Select)`
  width: 100%;
  &.ant-select-single .ant-select-selector {
    height: 40px;
    font-size: 1rem;
    background: #8cb909;
    border-color: #8cb909;
  }
`;

interface Item {
  name: string;
  muscleType: string;
  img: string | null;
}

export const AmountExercise = ({ handleAmountExercise }) => {
  return (
    <FormAnt>
      <FormAnt.Item label="ระบุจำนวนเซ็ต">
        <SelectStyled onChange={handleAmountExercise}>
          {[...Array(20).keys()].map((i, index) => (
            <Option value={i + 1} key={index}>
              {i + 1}
            </Option>
          ))}
        </SelectStyled>
      </FormAnt.Item>
    </FormAnt>
  );
};
