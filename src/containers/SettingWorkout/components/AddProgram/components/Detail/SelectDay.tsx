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

export const days = [
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
  "อาทิตย์",
];

export const DayExercise = ({ handleDayExercise }) => {
  return (
    <FormAnt>
      <FormAnt.Item label="เลือกวัน">
        <PrimarySelect onChange={handleDayExercise} placeholder="เลือกวัน">
          {days.map((value, index) => (
            <Option value={value} key={index}>
              {value}
            </Option>
          ))}
        </PrimarySelect>
      </FormAnt.Item>
    </FormAnt>
  );
};
