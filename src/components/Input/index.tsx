import React from "react";
import styled from "styled-components";

import { Input } from "antd";

export const InputText = styled(Input)`
  && {
    border-radius: 5px;
    border: none;
    background: black;
    color: yellow;
    font-size: 0.8rem;
  }
`;

export const InputPassword = styled(Input.Password)`
  && {
    border-radius: 5px;
    border: none;
    background: black;
    color: yellow;
    font-size: 0.8rem;
  }
  & .ant-input {
    background: black;
    color: yellow;
  }
`;
