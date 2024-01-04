import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  Heading1,
  Heading2,
  Heading6,
} from "../../../components/Typography/Headings";
import { useFifthTemplateStyles } from "./Fifth.Template.style";

const FifthTemplate = () => {
  const fiftheTemplateData = useSelector((state) => state.forms);
  const theme = useMantineTheme();
  const { classes } = useFifthTemplateStyles();
  return (
    <Box
      mah={"fit-content"}
      mih={"297mm"}
      w={"210mm"}
      bg={"white"}
      style={{
        boxShadow: "0px 0px 6px 5px #7c797954",
      }}
    >
      <Flex w={"100%"} h={"100%"} direction={"column"}>
        <Box
          w={"100%"}
          bg={theme.colors.custom.normal}
          mih={"15rem"}
          mah={"fit-content"}
        >
          <Flex
            direction={"column"}
            align={"start"}
            justify={"center"}
            wrap={"wrap"}
            p={"16px"}
            w={"100%"}
            h={"100%"}
          >
            <Box h={"100%"} w={"100%"}>
              <Heading1
                width={"25rem"}
                alignment={"start"}
                color={theme.colors.custom.heading1.light}
              >
                {fiftheTemplateData.personal_details.firstName
                  ? fiftheTemplateData.personal_details.firstName
                  : "Your Name"}
              </Heading1>
              <Heading1
                width={"25rem"}
                alignment={"start"}
                color={theme.colors.custom.heading1.light}
              >
                {fiftheTemplateData.personal_details.lastName}
              </Heading1>
            </Box>
            <Text color={"gray"} align="start" pt={"3px"} size={"15px"}>
              {fiftheTemplateData.personal_details.wantedJobTitle
                ? fiftheTemplateData.personal_details.wantedJobTitle
                : "Profession"}
            </Text>

            <Text color={"gray"} align="start" pt={"3px"} size={"15px"}>
              {fiftheTemplateData.personal_details.city ? (
                <>
                  <strong>Address</strong>{" "}
                  {`${fiftheTemplateData.personal_details.city}, ${fiftheTemplateData.personal_details.countryName} ${fiftheTemplateData.personal_details.postalCode}`}
                </>
              ) : fiftheTemplateData.personal_details.countryName ? (
                <>
                  <strong>Address</strong>{" "}
                  {`${fiftheTemplateData.personal_details.city}, ${fiftheTemplateData.personal_details.countryName} ${fiftheTemplateData.personal_details.postalCode}`}
                </>
              ) : fiftheTemplateData.personal_details.postalCode ? (
                <>
                  <strong>Address</strong>{" "}
                  {`${fiftheTemplateData.personal_details.city}, ${fiftheTemplateData.personal_details.countryName} ${fiftheTemplateData.personal_details.postalCode}`}
                </>
              ) : (
                ""
              )}
            </Text>
            <Text color={"gray"} align="start" pt={"3px"} size={"15px"}>
              <strong>Phone Number</strong>{" "}
              {fiftheTemplateData.personal_details.phoneNumber
                ? fiftheTemplateData.personal_details.phoneNumber
                : "+90 552 553 32 32"}
            </Text>
            <Text color={"gray"} align="start" pt={"3px"} size={"15px"}>
              <strong>E-mail</strong>{" "}
              {fiftheTemplateData.personal_details.email
                ? fiftheTemplateData.personal_details.email
                : "yourmail@gmail.com"}
            </Text>
          </Flex>
        </Box>
        <Box w={"100%"} p={"24px"}>
          <div
            style={{
              color: "lightslategray",
            }}
            dangerouslySetInnerHTML={{
              __html: `${fiftheTemplateData.professionalSummary.details}`,
            }}
          />
        </Box>

        <Box p={"12px"} h={"fit-content"}>
          <Box
            mb={"12px"}
            style={{
              width: "100%",
              height: "50px",
              maxHeight: "fit-content",
              display: "flex",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={classes.Contact_heading}
            >
              Skills
            </Heading2>
          </Box>
          {fiftheTemplateData.skills.map((item, key) => {
            return (
              <Box
                w={"100%"}
                mb={"24px"}
                mah={"fit-content"}
                pb={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                    ? ""
                    : "20px"
                }
                bg={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                    ? ""
                    : theme.colors.custom.darker
                }
              >
                <Box
                  h={
                    item.groupTitle === "Skill Group Title"
                      ? "fit-content"
                      : item.groupTitle === ""
                      ? "fit-content"
                      : "fit-content"
                  }
                  w={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                      ? "0"
                      : "100%"
                  }
                  p={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                      ? "0"
                      : "12px"
                  }
                >
                  <Heading6
                    width={"15rem"}
                    alignment={"start"}
                    color={theme.colors.custom.heading1.light}
                  >
                    {item.groupTitle === "Skill Group Title"
                      ? ""
                      : item.groupTitle === ""
                      ? ""
                      : item.groupTitle}
                  </Heading6>
                  <Box w={"100%"}>
                    <Flex w={'100%'} h={'100%'} wrap={'wrap'}>
                    {item.skills.map((skill, key) => {
                      return (
                        <Box w={"15rem"} mb={32} p={"12px"}>
                            <Box
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                height: "35px",
                                width: "90%",
                              }}
                            >
                              <Heading6
                                width={"15rem"}
                                alignment={"start"}
                                color={"#66778f"}
                                className={classes.skillsheading}
                              >
                                {skill.skill}
                              </Heading6>
                            </Box>
                        </Box>
                      );
                    })}
                    </Flex>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default FifthTemplate;
