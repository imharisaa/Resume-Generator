import { Box, Button, Paper, Text } from "@mantine/core";
import React, { useState } from "react";
import { useResumeStyles } from "./Resume.style";
import LeftSection from '../Resume/LeftSection/LeftSection'

const Resume = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { classes:{
        left_section,
        resume_container,
        right_section,
        left_section_open,
        left_section_buttonOpened,
        left_section_buttonClosed
    } } = useResumeStyles()
    
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <Box className={resume_container}>
        <Box className={`${left_section} ${isDrawerOpen ? left_section_open : ''}`}>
          <Paper padding={isDrawerOpen ? 'md' : 0}>
             <Box hidden={!isDrawerOpen}>
              <LeftSection />
             </Box>
          </Paper>
          <Button className={`${isDrawerOpen ? left_section_buttonOpened : left_section_buttonClosed}`} fullWidth variant="outline" onClick={toggleDrawer}>
            {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
          </Button>
        </Box>
        <Box className={right_section}>
          <Paper padding="lg">
            <Text align="center">
              Right Section Content
            </Text>
          </Paper>
        </Box>
      </Box>
    );
};

export default Resume;
