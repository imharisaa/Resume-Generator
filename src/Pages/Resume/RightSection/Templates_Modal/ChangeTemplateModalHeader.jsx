import {
  ActionIcon,
  Box,
  Flex,
  Menu,
  Title,
  createStyles,
} from "@mantine/core";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import {
  colorPateNames,
  colorPlates,
} from "../../../../Theming/CustomColorPlates/Plates";
import {
  hoverEnd,
  hoverOver,
  selectedPlate,
} from "../../../../store/theme.reducer";
import { useDispatch } from "react-redux";

const ChangeTemplatesModalHeader = ({ close }) => {
  const { classes } = useChangeTemplateModalHeaderStyle();
  return (
    <Box
      style={{ borderBottom: "2px solid lightgrey", zIndex: 1 }}
      h={"50px"}
      className={classes.container}
    >
      <Flex w={"100%"} h={"100%"} justify={"space-evenly"} align={"center"}>
        <Title order={2}>Change template</Title>
        <Box w={"80%"} h={"100%"}>
          <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
            {colorPateNames.map((item, i) => {
              return <PlateSelector key={i} color={item} />;
            })}
          </Flex>
        </Box>
        <ActionIcon w={40} h={40} onClick={close} variant="subtle">
          <IconSquareRoundedXFilled size={"2rem"} />
        </ActionIcon>
      </Flex>
    </Box>
  );
};

export default ChangeTemplatesModalHeader;

const PlateSelector = ({ color }) => {
  // const selectors = ["first", "second", "third"];
  const [selectedSelector, setSelectedSelector] = useState(null);
  const dispatch = useDispatch(); // Replace with your useDispatch from react-redux

  useEffect(() => {
    if (selectedSelector !== null) {
      dispatch(hoverOver({ color, selector: selectedSelector }));
    } else {
      dispatch(hoverEnd());
    }
  }, [selectedSelector]);

  const handleBoxClick = (selector) => {
    setSelectedSelector(selector);
    dispatch(selectedPlate());
  };

  const handleMouseEnter = (selector) => {
    setSelectedSelector(selector);
  };

  const handleMouseLeave = () => {
    setSelectedSelector(null);
  };

  return (
    <>
      <Flex w={50} justify={"center"} direction={"column"}>
        {/* {selectors.map((selector, index) => ( */}
        <Menu trigger="hover" withArrow withinPortal>
          <Menu.Target>
            <ActionIcon w={40} h={40}>
              <Box
                w={35}
                h={35}
                style={{ borderRadius: 10 }}
                bg={colorPlates[color]["first"].normal}
                onMouseEnter={() => handleMouseEnter("first")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleBoxClick("first")}
              />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown style={{ borderRadius: 20, backgroundColor: 'whitesmoke', maxWidth: '4.5rem' }}>
            <Menu.Item>
              <ActionIcon w={40} h={40}>
                <Box
                  w={35}
                  h={35}
                  style={{ borderRadius: 10 }}
                  bg={colorPlates[color]["second"].normal}
                  onMouseEnter={() => handleMouseEnter("second")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleBoxClick("second")}
                />
              </ActionIcon>
            </Menu.Item>
            <Menu.Item>
              <ActionIcon w={40} h={40}>
                <Box
                  w={35}
                  h={35}
                  style={{ borderRadius: 10 }}
                  bg={colorPlates[color]["third"].normal}
                  onMouseEnter={() => handleMouseEnter("third")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleBoxClick("third")}
                />
              </ActionIcon>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </>
  );
};

const useChangeTemplateModalHeaderStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    position: "fixed",
    width: "97rem",
    backgroundColor: "white",
  },
}));
