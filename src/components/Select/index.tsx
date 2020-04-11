import React from "react";
import styled from "styled-components";

import { Select } from "antd";

export const PrimarySelect = styled(Select)`
  width: 100%;
  &.ant-select-single .ant-select-selector {
    height: 40px;
    font-size: 1rem;
    background: #8cb909;
    border-color: #8cb909;
  }
`;
