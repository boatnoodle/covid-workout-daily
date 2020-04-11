import React from "react";
import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  &,
  .ant-btn:hover,
  .ant-btn:focus {
    background: #8cb909 !important;
    border-color: #8cb909 !important;
    color: black !important;
    padding: 0 1rem;
    height: 40px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;
