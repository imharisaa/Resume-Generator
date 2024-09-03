import { Box, Flex, Slider, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import {
  Heading1,
  Heading2,
  Heading6,
} from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";
import { useSixthTemplateStyle } from "./Sixth.Template.style";
import {
  Education,
  ProfessionalSummary,
  WorkHistory,
} from "../third-Template/Third.template";
import { Document, Page } from "@react-pdf/renderer";
import { Helmet } from "react-helmet-async";

const SixthTemplate = () => {
  const {
    perviewMode,
    divId,
    personal_details: {
      wantedJobTitle,
      firstName,
      lastName,
      email,
      phoneNumber,
    },
    websiteAndSocialLinks,
    skills,
  } = useSelector((state) => state.forms);
  const {
    classes: {
      Forth_Template__container,
      Forth_Template__col_1,
      Forth_Template__col_2,
      Name_And_Profession__container,
      Contact_Component__container,
      Contact_Component__contact_heading,
      Contact_Component__content_email__container,
      Contact_Component__content_social_links__container,
      Skill_Component__container,
      Skill_Component__skills_heading,
      Skill_Component__skill_heading,
      Skill_Component__content_container,
      Contact_heading,
      workHistory_header,
      skillHeading,
      Sixth_Template__Header__container,
    },
  } = useSixthTemplateStyle();

  const theme = useMantineTheme();

  return (
    <Document>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Permresume | How to build free resume</title>
      </Helmet>
      <Page size={"A4"}>
        <Box
          style={{
            boxShadow: "0px 0px 6px 5px #7c797954",
            overflowY: perviewMode ? "auto" : "hidden",
            overflowX: "hidden",
          }}
          bg={"white"}
          mah={"fit-content"}
          mih={"297mm"}
          w={"210mm"}
          id={divId}
        >
          <Flex h={"100%"} w={"100%"} direction={"column"}>
            <Box p={15} width={"100%"}>
              <Flex justify={'space-between'} width="100%">
                <Box
                  bg={theme.colors.custom.normal}
                  w={'64%'}
                  className={`${Name_And_Profession__container} ${Sixth_Template__Header__container}`}
                >
                  <Box>
                    <Heading1
                      width={"25rem"}
                      alignment={"start"}
                      color={theme.colors.custom.heading1.light}
                    >
                      {firstName ? firstName : "Your Name"}
                    </Heading1>

                    <Heading1
                      width={"25rem"}
                      alignment={"start"}
                      color={theme.colors.custom.heading1.light}
                    >
                      {lastName}
                    </Heading1>
                  </Box>

                  <Text color={"gray"} align="start" pt={"3px"} size={"15px"}>
                    {wantedJobTitle ? wantedJobTitle : "Profession"}
                  </Text>

                  <Box pt={10} w={"100%"}>
                    <Flex width="100%" direction={"column"}>
                      <Heading6
                        width={"25rem"}
                        alignment={"start"}
                        color={"white"}
                      >
                        Professional Summary
                      </Heading6>
                      <ProfessionalSummary
                        padding={"30px 0 20px 0"}
                        color={"white"}
                      />
                    </Flex>
                  </Box>
                </Box>

                <Box
                  w={'34%'}
                  mih={"100px"}
                  mah={"fit-content"}
                  className={Contact_Component__container}
                >
                  {/* <Box className={Contact_Component__contact_heading}>
                    <Heading2
                      width={"15rem"}
                      alignment={"start"}
                      color={"#003D73"}
                      className={Contact_heading}
                    >
                      Contact
                    </Heading2>
                  </Box> */}

                  <Box className={Contact_Component__content_email__container}>
                    <Heading6
                      width={"15rem"}
                      alignment={"end"}
                      color={"black"}
                    >
                      E-mail
                    </Heading6>

                    <Text align={"end"} size={"15px"} color={"black"}>
                      {email ? email : "a@gmail.com"}
                    </Text>
                  </Box>

                  <Box
                    pt={0}
                    className={Contact_Component__content_email__container}
                  >
                    <Heading6
                      width={"15rem"}
                      alignment={"end"}
                      color={"black"}
                    >
                      Phone Number
                    </Heading6>

                    <Text align={"end"} size={"15px"} color={"black"}>
                      {phoneNumber ? phoneNumber : "+90 333 328 23 23"}
                    </Text>
                  </Box>

                  {websiteAndSocialLinks.map((item, key) => (
                    <Box
                      className={
                        Contact_Component__content_social_links__container
                      }
                    >
                      <Heading6
                        width={"15rem"}
                        alignment={"start"}
                        color={"black"}
                      >
                        {item.title}
                      </Heading6>

                      <Text
                        style={{ wordBreak: "break-word" }}
                        align={"start"}
                        size={"15px"}
                        color={"black"}
                      >
                        {item.link}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Flex>
            </Box>
            <Box className={Forth_Template__container} w={"100%"} h={"279mm"}>
              <Flex h={"100%"} w={"100%"} direction={"column"}>
                <Box className={Forth_Template__col_2}>
                  <Flex direction={"column"}>
                    <WorkHistory
                      className={workHistory_header}
                      childPadding={"12px 0"}
                      title={"Career Expertise"}
                    />
                    {/* <Education /> */}
                  </Flex>
                </Box>
              </Flex>

              <Box className={Forth_Template__col_1} id="column one">
                {/* Contact starts */}
                {/* <Box
                  w={"15rem"}
                  mih={"100px"}
                  mah={"fit-content"}
                  className={Contact_Component__container}
                >
                  <Box className={Contact_Component__contact_heading}>
                    <Heading2
                      width={"15rem"}
                      alignment={"start"}
                      color={"#003D73"}
                      className={Contact_heading}
                    >
                      Contact
                    </Heading2>
                  </Box>

                  <Box className={Contact_Component__content_email__container}>
                    <Heading6
                      width={"15rem"}
                      alignment={"start"}
                      color={"black"}
                    >
                      E-mail
                    </Heading6>

                    <Text align={"start"} size={"15px"} color={"black"}>
                      {email ? email : "a@gmail.com"}
                    </Text>
                  </Box>

                  <Box
                    pt={0}
                    className={Contact_Component__content_email__container}
                  >
                    <Heading6
                      width={"15rem"}
                      alignment={"start"}
                      color={"black"}
                    >
                      Phone Number
                    </Heading6>

                    <Text align={"start"} size={"15px"} color={"black"}>
                      {phoneNumber ? phoneNumber : "+90 333 328 23 23"}
                    </Text>
                  </Box>

                  {websiteAndSocialLinks.map((item, key) => (
                    <Box
                      className={
                        Contact_Component__content_social_links__container
                      }
                    >
                      <Heading6
                        width={"15rem"}
                        alignment={"start"}
                        color={"black"}
                      >
                        {item.title}
                      </Heading6>

                      <Text
                        style={{ wordBreak: "break-word" }}
                        align={"start"}
                        size={"15px"}
                        color={"black"}
                      >
                        {item.link}
                      </Text>
                    </Box>
                  ))}
                </Box> */}
                {/* Contact ends */}

                {/* Skill starts */}
                <Box w={"15rem"} className={Skill_Component__container}>
                  <Box mb={"12px"} className={Skill_Component__skills_heading}>
                    <Heading2
                      width={"15rem"}
                      alignment={"start"}
                      color={"#003D73"}
                      className={Contact_heading}
                    >
                      Skills
                    </Heading2>
                  </Box>
                  {skills.map((item, key) => {
                    return (
                      <Box
                        w={"15rem"}
                        mb={"24px"}
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
                              ? "0"
                              : item.groupTitle === ""
                              ? "0"
                              : "25px"
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
                          className={Skill_Component__skill_heading}
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
                        </Box>
                        <Box w={"15rem"}>
                          {item.skills.map((skill, key) => {
                            let beginner = "";
                            let skillFull = "";
                            let experienced = "";
                            let advance = "";

                            if (skill.level <= 20) {
                              beginner = "Beginner";
                            } else if (skill.level <= 40) {
                              skillFull = "Skillfull";
                            } else if (skill.level <= 70) {
                              experienced = "Experienced";
                            } else if (skill.level <= 100) {
                              advance = "Advance";
                            }

                            return (
                              <Box w="15rem" mb={32} p={"12px"}>
                                <Box
                                  className={Skill_Component__content_container}
                                  id="kddidididi"
                                >
                                  <Heading6
                                    width={"15rem"}
                                    alignment={"start"}
                                    color={"#66778f"}
                                    className={skillHeading}
                                  >
                                    {skill.skill}
                                  </Heading6>
                                  <Slider
                                    size={"md"}
                                    w={"100%"}
                                    radius={"lg"}
                                    color={skill.levelColor}
                                    value={skill.level}
                                    marks={[
                                      { value: 20, label: beginner },
                                      { value: 40, label: skillFull },
                                      { value: 70, label: experienced },
                                      { value: 100, label: advance },
                                    ]}
                                  />
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                {/* Skill ends */}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Page>
    </Document>
  );
};

export default SixthTemplate;
