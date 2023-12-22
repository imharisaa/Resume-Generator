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
import { IconEye, IconFileDownload, IconFileUpload } from "@tabler/icons-react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePreviewMode,
  templateMaper,
  uploadCVData,
} from "../../../store/forms.reducer";
import useRightSectionStyle from "./RightSection.style";
import ChangeTemplatesModalHeader from "./Templates_Modal/ChangeTemplateModalHeader";
import ChangeTemplateModalLeftSection from "./Templates_Modal/ChangeTemplateModalLeftSection";
import ChangeTemplateModalRightSection from "./Templates_Modal/ChangeTemplateModalRightSection";
import { usePDF } from "react-to-pdf";

import CryptoJS from "crypto-js";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { generatePDF, printPage } from "./pdfgenerator";
import CanadianFirstTemplate from "../../../Resume_Preview/Templates/Canadian.First.Template/Canadian.First.Template";


const RightSection = () => {
  const pdfRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [opened, { open, close }] = useDisclosure(false);
  const colorPlate = useSelector((state) => state.theme.currentPlate);
  const cvData = useSelector((state) => state.forms);
  const Template = templateMaper[cvData.template];
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
  const encryptionKey =
    "99a2f367dcdcd4d89b38455c57a63baa4701267a40629ae67c152ae246b046c0";

  // const downloadData = () => {
  //   // Convert the data to JSON
  //   const jsonData = JSON.stringify(cvData);

  //   const encrypted = CryptoJS.AES.encrypt(jsonData, encryptionKey).toString();
  //   // Create a Blob with the JSON data
  //   const blob = new Blob([encrypted], { type: "application/json" });

  //   // Create a link element to trigger the download
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "Data.json";
  //   link.click();

  //   // Clean up the URL created for the download
  //   URL.revokeObjectURL(link.href);
  // };

  const downloadData = () => {
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

  // const UploadData = (event) => {
  //   debugger;

  //   const file = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       try {
  //         const encryptedData = e.target.result
  //         const decrypted = CryptoJS.AES.decrypt(
  //           encryptedData,
  //           encryptionKey
  //         ).toString(CryptoJS.enc.Utf8);
  //         const decryptedJSON = JSON.parse(decrypted);
  //         dispatch(uploadCVData(decryptedJSON));
  //       } catch (error) {
  //         console.error("Error parsing JSON file:", error);
  //       }
  //     };

  //     reader.readAsText(file);
  //   }
  // };

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
          <Flex justify={"center"} align={"center"} w={"100%"} h={"100%"}>
            <MantineProvider
              theme={{
                colors: {
                  custom: colorPlate,
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
                  onClick={() => {
                    open();
                    dispatch(changePreviewMode(true));
                  }}
                >
                  <IconEye />
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

                <ActionIcon
                  variant="gradient"
                  title="Download CV As PDF"
                  mr={12}
                  mb={5}
                  onClick={() => generatePDF(pdfRef)}
                >
                  <IconFileDownload />
                </ActionIcon>

                <ActionIcon
                  variant="gradient"
                  title="Download CV As PDF"
                  mr={12}
                  mb={5}
                  onClick={() => printPage('cvPrint')}
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
                  // size={"xl"}
                  fullScreen
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
                    <Box bg={"white"} h={"50px"}>
                      <ChangeTemplatesModalHeader
                        close={() => {
                          dispatch(changePreviewMode(false));
                          close();
                        }}
                      />
                    </Box>
                    <Flex w={"100%"}>
                      <Box
                        w={"50%"}
                        style={{
                          position: "relative",
                          overflowY: "auto",
                        }}
                      >
                        <ChangeTemplateModalLeftSection />
                      </Box>
                      <Box
                        w={"50%"}
                        style={{
                          padding: "8px 20px 0px 20px",
                          display: "flex",
                          justifyContent: "center",
                          justifyContent: "space-around",
                          maxHeight: "calc( 100vh - 60px )",
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        <ChangeTemplateModalRightSection />
                      </Box>
                    </Flex>
                  </Flex>
                </Modal>
              </Box>
              <Box className={right_section_container_templates}>
                <Flex>
                  {/* Template */}
                  <Box >
                    <Template />
                    {/* <CanadianFirstTemplate pdfRef={pdfRef} divId={'cvPrint'}  /> */}
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
