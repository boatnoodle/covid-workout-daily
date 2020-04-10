import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Formik, Field } from "formik";
import { Form, Typography } from "antd";
import { InputText, InputPassword } from "components/Input";

const { Title } = Typography;

const Header = styled(Title)`
  text-align: center;
`;

export const AddProgram = () => {
  const initialValues = {};

  const handleSubmit = () => {};

  return (
    <>
      <Header level={4}>เพิ่มโปรแกรมออกกำลังกาย</Header>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <InputText />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please InputText your password!",
                  },
                ]}
              >
                <InputPassword />
              </Form.Item>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
