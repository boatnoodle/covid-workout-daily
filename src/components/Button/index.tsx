import React from "react";
import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  &,
  .ant-btn:hover,
  .ant-btn:focus {
    background: #8cb909;
    border-color: #8cb909;
    color: black;
    padding: 0 1rem;
    height: 40px;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .ant-btn:not([disabled]):hover {
    background: #8cb909;
    border-color: #8cb909;
    color: black;
  }
`;
