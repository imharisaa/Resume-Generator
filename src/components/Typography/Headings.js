import { Title } from "@mantine/core";
import React from "react";

const Heading1 = ({ children, color, alignment, width, className }) => {
  return (
    <Title
      order={1}
      w={width}
      className={className}
      align={alignment ? alignment : "start"}
      color={color}
    >
      {children}
    </Title>
  );
};

const Heading2 = ({ children, color, alignment, width, className }) => {
  return (
    <Title
      order={2}
      w={width}
      className={className}
      align={alignment ? alignment : "start"}
      color={color}
    >
      {children}
    </Title>
  );
};

const Heading3 = ({ children, color, alignment, width, className }) => {
  return (
    <Title
      order={3}
      w={width}
      className={className}
      align={alignment ? alignment : "start"}
      color={color}
    >
      {children}
    </Title>
  );
};

const Heading4 = ({ children, color, alignment, width }) => {
  return (
    <Title
      order={4}
      w={width}
      align={alignment ? alignment : "start"}
      color={color}
    >
      {children}
    </Title>
  );
};

const Heading5 = ({ children, color, alignment, width }) => {
  return (
    <Title
      order={5}
      w={width}
      align={alignment ? alignment : "start"}
      color={color}
    >
      {children}
    </Title>
  );
};

const Heading6 = ({ children, color, alignment, width, className }) => {
  return (
    <Title
      order={6}
      w={width}
      align={alignment ? alignment : "start"}
      color={color}
      className={className}
    >
      {children}
    </Title>
  );
};

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
