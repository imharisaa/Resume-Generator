import { ActionIcon, Box, Flex, Title, createStyles } from "@mantine/core";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import {
  colorPateNames,
  colorPlates,
} from "../../../../Theming/CustomColorPlates/Plates";
import { hoverEnd, hoverOver, selectedPlate } from "../../../../store/theme.reducer";
import { useDispatch } from "react-redux";

const ChangeTemplatesModalHeader = ({ close }) => {
  const { classes } = useChangeTemplateModalHeaderStyle();
  return (
    <Box
      style={{ borderBottom: "2px solid lightgrey" }}
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

// const PlateSelector = ({ color }) => {
//   return (
//     <>
//       <Flex w={50} justify={'center'} direction={'column'} >
//         <Box
//           w={25}
//           h={25}
//           mb={12}
//           mr={12}
//           style={{ borderRadius: 5 }}
//           bg={colorPlates[color].first.normal}
//         />
//         <Box
//           w={25}
//           h={25}
//           mb={12}
//           mr={12}
//           style={{ borderRadius: 5 }}
//           bg={colorPlates[color].second.normal}
//         />
//         <Box
//           w={25}
//           h={25}
//           mr={12}
//           mb={12}
//           style={{ borderRadius: 5 }}
//           bg={colorPlates[color].third.normal}
//         />
//       </Flex>
//     </>
//   );
// };

const PlateSelector = ({ color }) => {
  const selectors = ['first', 'second', 'third'];
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
      <Flex w={50} justify={'center'} direction={'column'}>
        {selectors.map((selector, index) => (
          <Box
            key={index}
            w={25}
            h={25}
            mb={12}
            mr={12}
            style={{ borderRadius: 5 }}
            bg={colorPlates[color][selector].normal}
            onMouseEnter={() => handleMouseEnter(selector)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleBoxClick(selector)}
          />
        ))}
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
