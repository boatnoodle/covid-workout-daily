import React from "react";
import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  &,
  .ant-btn:hover,
  .ant-btn:focus {
    background: #ff6700;
    border-color: #ff6700;
    color: #ffffff;
    padding: 0 1rem;
    height: 40px;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .ant-btn:not([disabled]):hover {
    background: #ff6700;
    border-color: #ff6700;
    color: black;
  }
`;
