import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Input,
  MantineProvider,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconFileDownload,
  IconFileUpload,
  IconTemplate,
} from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FristTemplate from "../../../Resume_Preview/Templates/First.Template/First.template";
import { colorPlates } from "../../../Theming/CustomColorPlates/Plates";
import useRightSectionStyle from "./RightSection.style";
import ChangeTemplatesModalHeader from "./Templates_Modal/ChangeTemplateModalHeader";
import ChangeTemplateModalRightSection from "./Templates_Modal/ChangeTemplateModalRightSection";
import { uploadCVData } from "../../../store/forms.reducer";
import ForthTemplate from "../../../Resume_Preview/Templates/forth-Template/Forth.template";

const RightSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const themeData = useSelector((state) => state.theme.colorPlate);
  const cvData = useSelector((state) => state.forms);
  const {
    classes: {
      right_section_container,
      right_section_container_templates,
      right_section_container_templates_selector,
    },
  } = useRightSectionStyle();
  const theme = useMantineTheme();

  const uploadCVJsonFile = useRef();

  const dispatch = useDispatch();

  const downloadData = () => {
    // fetchData(); // Fetch the data when the button is clicked

    // Convert the data to JSON
    const jsonData = JSON.stringify(cvData, null, 2);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CV-Data.json";
    link.click();

    // Clean up the URL created for the download
    URL.revokeObjectURL(link.href);
  };

  const UploadData = (event) => {
    debugger;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          dispatch(uploadCVData(jsonData));
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <Container
        className={right_section_container}
        p={"xl"}
        h={"95vh"}
        w={"100vw"}
      >
        <Grid gutter={"lg"}>
          <Flex
            justify={"center"}
            bg={"lightgray"}
            align={"center"}
            w={"100%"}
            h={"100%"}
          >
            <MantineProvider
              theme={{
                colors: {
                  custom: colorPlates.blue,
                },
              }}
            >
              {/* Templates Selector */}
              <Box className={right_section_container_templates_selector}>
                <ActionIcon
                  mb={5}
                  variant="gradient"
                  title="Select Templates"
                  mr={12}
                  onClick={open}
                >
                  <IconTemplate />
                </ActionIcon>

                <ActionIcon
                  variant="gradient"
                  title="Download CV Data"
                  mr={12}
                  mb={5}
                  onClick={downloadData}
                >
                  <IconFileDownload />
                </ActionIcon>

                <Input
                  style={{ display: "none" }}
                  ref={uploadCVJsonFile}
                  type="file"
                  accept=".json"
                  onChange={UploadData}
                />
                <ActionIcon
                  variant="gradient"
                  title="Upload CV Data"
                  mr={12}
                  onClick={() => {
                    uploadCVJsonFile.current.click();
                  }}
                >
                  <IconFileUpload />
                </ActionIcon>

                <Modal
                  centered
                  size={"100rem"}
                  withCloseButton={false}
                  transitionProps={{
                    transition: "fade",
                    duration: 600,
                    timingFunction: "linear",
                  }}
                  opened={opened}
                  onClose={close}
                >
                  <Flex w={"100%"} direction={"column"}>
                    <Box bg={"white"} h={"100%"}>
                      <ChangeTemplatesModalHeader close={close} />
                    </Box>
                    <Flex w={"100%"}>
                      <Box w={"50%"}>
                        <ChangeTemplateModalRightSection />
                      </Box>
                      <Box w={"50%"}></Box>
                    </Flex>
                  </Flex>
                </Modal>
              </Box>
              <Box className={right_section_container_templates}>
                <Flex>
                  {/* Template */}
                  <Box>
                    <ForthTemplate />
                  </Box>
                </Flex>
              </Box>
            </MantineProvider>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default RightSection;
