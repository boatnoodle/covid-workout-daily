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

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export const ListExercise = () => {
  return (
    <>
      <Title level={4}>เลือกท่าออกกำลังกาย</Title>
      <ListStyled
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: { title: string }) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </>
  );
};
