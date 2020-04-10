import React from "react";
import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  && {
    background: black;
    border-color: black;
    color: yellow;
    padding: 0 1rem;
    height: 40px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;
