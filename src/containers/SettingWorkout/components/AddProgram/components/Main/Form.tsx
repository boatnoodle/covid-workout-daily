import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Field, useFormikContext } from "formik";
import { Form as FormAnt } from "antd";
import { InputText } from "components/Input";

export const Form = () => {
  return (
    <FormAnt>
      <Field name="programName">
        {({ field }) => {
          return (
            <FormAnt.Item label="ชื่อโปรแกรม">
              <InputText {...field} />
            </FormAnt.Item>
          );
        }}
      </Field>
    </FormAnt>
  );
};
