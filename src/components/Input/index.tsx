import React from "react";
import styled from "styled-components";

import { Input } from "antd";

export const InputText = styled(Input)`
  && {
    border-radius: 8px;
    font-size: 0.8rem;
  }
`;

export const InputPassword = styled(Input.Password)`
  && {
    border-radius: 8px;
    font-size: 0.8rem;
  }
`;
