import { ActionIcon, Box, Button, Paper, Text } from "@mantine/core";
import React, { useState } from "react";
import { useResumeStyles } from "./Resume.style";
import LeftSection from "../Resume/LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import { IconArrowBigRightLines } from "@tabler/icons-react";

const Resume = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    classes: {
      left_section,
      resume_container,
      right_section,
      left_section_open,
      left_section_buttonOpened,
      left_section_buttonClosed,
      openDrawerIcon,
    },
  } = useResumeStyles();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box className={resume_container}>
      <Box
        className={`${left_section} ${isDrawerOpen ? left_section_open : ""}`}
      >
        <Paper padding={isDrawerOpen ? "md" : 0}>
          <Box hidden={!isDrawerOpen}>
            <LeftSection />
          </Box>
        </Paper>
        <ActionIcon
          variant="transparent"
          className={`${
            isDrawerOpen ? left_section_buttonOpened : left_section_buttonClosed
          }`}
          fullWidth
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? (
            "X"
          ) : (
            <Box className={openDrawerIcon}>
              <IconArrowBigRightLines
                height="100%"
                width="100%"
                color="#5455578a"
              />
            </Box>
          )}
        </ActionIcon>
      </Box>
      <Box className={right_section}>
        <Paper padding="lg">
          <RightSection />
        </Paper>
      </Box>
    </Box>
  );
};

export default Resume;
