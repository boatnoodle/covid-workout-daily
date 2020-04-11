import React, { useState } from "react";
import styled from "styled-components";
import { List, Typography } from "antd";

const { Title } = Typography;

const ListStyled = styled(List)`
  & .ant-list-items {
    background: #d4d4d4;
  }

  & .ant-list-item {
    padding: 12px 10px;
  }

  & h4 {
    font-size: 0.8rem;
  }
`;

interface Item {
  name: string;
  muscleType: string;
  img: string | null;
}

export const SelectExercise = ({ datas, handleSelectExercise }) => {
  const [exercise, setExercise] = useState(null);
  const handleClick = (name) => {
    setExercise(name);
    handleSelectExercise(name);
  };

  return (
    <ListStyled
      itemLayout="horizontal"
      dataSource={datas}
      renderItem={(item: Item) => {
        return (
          <List.Item
            style={{ background: exercise === item.name ? "#8cb90b" : "" }}
            onClick={() => handleClick(item.name)}
          >
            <List.Item.Meta title={item.name} />
          </List.Item>
        );
      }}
    />
  );
};
