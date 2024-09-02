import React from 'react'
import { useSelector } from "react-redux";
import { useSixthTemplateStyle } from './Sixth.Template.style';
import { Box, Flex, Grid, Slider, Text, useMantineTheme, createStyles, Badge } from "@mantine/core";
import { IconHeadphones } from '@tabler/icons-react';

const A4_WIDTH = 595;

const SixthTemplate = () => {
    const SixthTemplateData = useSelector((state) => state.forms);
    const theme = useMantineTheme();
    return (
        // <Box bg={"blue"} style={{ maxWidth: A4_WIDTH, margin: '0 auto',   }} h={"297mm"}>
        <Grid gutter={0} w={"210mm"} h={'297mm'}>
          {/* 70% Column */}
          <Grid.Col span={8}>
            {/* First row - 10% height */}
            <div style={{ height: '15vh', backgroundColor: '#f0f0f0' }}>
              {/* Content here */}
            </div>
            {/* Second row - remaining height */}
            <div style={{ height: '85vh', backgroundColor: '#e0e0e0' }}>
              {/* Content here */}
            </div>
          </Grid.Col>
  
          {/* 30% Column */}
          <Grid.Col span={4}>
            {/* First row - 10% height */}
            <div style={{ height: '15vh', backgroundColor: '#d0d0d0' }}>
              {/* Content here */}
            </div>
            {/* Second row - remaining height */}
            <div style={{ height: '85vh', backgroundColor: '#c0c0c0' }}>
              {/* Content here */}
              <CoreSkills />
            </div>
          </Grid.Col>
        </Grid>
    //   </Box>
    )
}

export default SixthTemplate


const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  icon: {
    marginRight: theme.spacing.xs,
    color: theme.colors.gray[6],
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
  },
  skillBadge: {
    backgroundColor: theme.colors.gray[7],
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
}));

const CoreSkills = () => {
  const { classes } = useStyles();

  const skills = [
    'Social Media Marketing',
    'Strategic Planning',
    'Branding',
    'Analytical Skills',
    'Marketing Communications',
  ];

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <IconHeadphones className={classes.icon} />
        <Text weight={600} size="lg">Core Skills</Text>
      </Box>
      <Box className={classes.skillsList}>
        {skills.map((skill, index) => (
          <Badge key={index} className={classes.skillBadge}>
            {skill}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

