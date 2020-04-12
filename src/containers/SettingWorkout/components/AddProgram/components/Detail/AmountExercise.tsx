import React, { useState } from "react";
import { Typography } from "antd";
import { Form as FormAnt } from "antd";
import { PrimarySelect } from "components/Select";

const { Option } = PrimarySelect;

interface Item {
  name: string;
  muscleType: string;
  img: string | null;
}

export const AmountExercise = ({ handleAmountExercise }) => {
  return (
    <FormAnt>
      <FormAnt.Item label="ระบุจำนวนเซ็ต">
        <PrimarySelect
          onChange={handleAmountExercise}
          placeholder="ระบุจำนวนเซ็ต"
        >
          {[...Array(20).keys()].map((i, index) => (
            <Option value={i + 1} key={index}>
              {i + 1}
            </Option>
          ))}
        </PrimarySelect>
      </FormAnt.Item>
    </FormAnt>
  );
};
