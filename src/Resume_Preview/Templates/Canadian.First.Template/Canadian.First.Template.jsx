import {
  Box,
  Container,
  Flex,
  Slider,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { useCanadianFirstTemplateStyles } from "./Canadian.First.Template.style";
import { useFirstTemplateStyle } from "../First.Template/First.template.style";
import {
  Heading2,
  Heading4,
  Heading5,
  Heading6,
} from "../../../components/Typography/Headings";

const CanadianFirstTemplate = () => {
  const theme = useMantineTheme();
  const canadianFirstTemplateData = useSelector((state) => state.forms);
  const {
    classes: {
      Skill_Component__container,
      Skill_Component__content_container,
      Skill_Component__skill_heading,
      Skill_Component__skills_heading,
    },
  } = useFirstTemplateStyle();
  const { classes } = useCanadianFirstTemplateStyles();
  return (
    <>
      <Container className={classes.page} h={"297mm"} w={"210mm"}>
        <Flex direction={"column"} w={"100%"} h={"100%"}>
          {/* //? Header of the Resume Starts from here */}
          <Box p={12} h={"10rem"} w={"100%"}>
            <Flex
              justify={"space-between"}
              align={"flex-start"}
              h={"100%"}
              w={"100%"}
            >
              <Box w={"49%"} h={"100%"}>
                <Flex
                  w={"100%"}
                  h={"100%"}
                  direction={"column"}
                  justify={"center"}
                  align={"flex-start"}
                >
                  <Title color={theme.colors.custom.heading1.light} order={1}>
                    {canadianFirstTemplateData.personal_details.firstName
                      ? canadianFirstTemplateData.personal_details.firstName
                      : "Your Name"}
                  </Title>
                  <Title color={theme.colors.custom.heading1.light} order={1}>
                    {canadianFirstTemplateData.personal_details.lastName}
                  </Title>
                  <Text italic color="gray">
                    {canadianFirstTemplateData.personal_details.wantedJobTitle
                      ? canadianFirstTemplateData.personal_details
                          .wantedJobTitle
                      : "Profession"}
                  </Text>
                </Flex>
              </Box>
              <Box w={"49%"} h={"100%"}>
                <Flex
                  justify={"center"}
                  align={"flex-end"}
                  w={"100%"}
                  h={"100%"}
                  direction={"column"}
                >
                  <Box miw={"10.5rem"}>
                    <Text w={"100%"} align="left">
                      {canadianFirstTemplateData.personal_details.city
                        ? `${canadianFirstTemplateData.personal_details.city}, ${canadianFirstTemplateData.personal_details.countryName}`
                        : canadianFirstTemplateData.personal_details
                            .countryName}
                    </Text>
                    <Text w={"100%"} align="left">
                      {canadianFirstTemplateData.personal_details.phoneNumber}
                    </Text>
                    <Text w={"100%"} align="left">
                      {canadianFirstTemplateData.personal_details.email}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          {/* //! Header of the Resume End from here */}
          {/* //? Professional Summery Starts From Here */}
          <Box p={12} w={"100%"}>
            <Flex direction={"column"} w={"100%"} h={"100%"}>
              <Box pl={12} w={"100%"} bg={"whitesmoke"} h={"100%"}>
                <Text
                  color={theme.colors.custom.heading1.light}
                  italic
                  fw={"bolder"}
                >
                  PROFESSIONAL SUMMERY
                </Text>
              </Box>

              <Box w={"100%"} pt={18}>
                <div
                  style={{
                    color: "lightslategray",
                    fontSize: "15px",
                    fontWeight: "300",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${canadianFirstTemplateData.professionalSummary.details}`,
                  }}
                />
              </Box>
            </Flex>
          </Box>
          {/* //! Professional Summery End Here */}
          {/* //? Skills Start From Here */}
          <Box p={12} w={"100%"}>
            <Flex direction={"column"} w={"100%"} h={"100%"}>
              <Box pl={12} w={"100%"} bg={"whitesmoke"} h={"100%"}>
                <Text
                  color={theme.colors.custom.heading1.light}
                  italic
                  fw={"bolder"}
                >
                  SKILLS
                </Text>
              </Box>

              {canadianFirstTemplateData.skills.map((item, key) => {
                return (
                  <Box w={"100%"} mb={"24px"}>
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
                      className={Skill_Component__skill_heading}
                    >
                      <Text
                        w={"100%"}
                        alignment={"start"}
                        fw={"bold"}
                        italic
                        color={"gray"}
                      >
                        {item.groupTitle === "Skill Group Title"
                          ? ""
                          : item.groupTitle === ""
                          ? ""
                          : item.groupTitle}
                      </Text>
                    </Box>
                    <Box w={"100%"}>
                      <Flex w={"100%"} gap={24} wrap={"wrap"}>
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
                            <Box>
                              <Box
                                className={Skill_Component__content_container}
                                w={"fit-content"}
                              >
                                <Text alignment={"start"} italic color={"gray"}>
                                  <li>{skill.skill}</li>
                                </Text>
                              </Box>
                            </Box>
                          );
                        })}
                      </Flex>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
          </Box>

          {/* //! SKills End Here */}
          {/* //? Work History Start From Here */}

          <Box p={12} w={"100%"}>
            <Flex direction={"column"} w={"100%"} h={"100%"}>
              <Box pl={12} w={"100%"} bg={"whitesmoke"} h={"100%"}>
                <Text
                  color={theme.colors.custom.heading1.light}
                  italic
                  fw={"bolder"}
                >
                  EXPERIENCE
                </Text>
              </Box>

              {canadianFirstTemplateData.employmentHistory.map((item) => (
                <Box w={"100%"} pt={12}>
                  <Flex w={"100%"} justify={"space-between"}>
                    <Box w={"49%"}>
                      <Flex w={"100%"} direction={"column"}>
                        <Text italic fz={15} fw={"bold"}>
                          {item.jobTitle}
                        </Text>
                        <Text italic fz={15} fw={"bold"}>
                          {item.employer}
                          {item.city === "" ? "" : ` | ${item.city}`}
                        </Text>
                      </Flex>
                    </Box>
                    <Box pr={12} w={"49%"}>
                      <Flex w={"100%"} align={"center"} justify={"flex-end"}>
                        <Text>{`${item.startDate} - ${item.endDate}`}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Box w={"100%"} pl={15} pt={6}>
                    <div
                      style={{
                        fontStyle: "italic",
                        color: "lightslategray",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `${item.details}`,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
          {/* //! Work History End Here */}
          {/* //? Education Start From Here */}

          <Box p={12} w={"100%"}>
            <Flex direction={"column"} w={"100%"} h={"100%"}>
              <Box pl={12} w={"100%"} bg={"whitesmoke"} h={"100%"}>
                <Text
                  color={theme.colors.custom.heading1.light}
                  italic
                  fw={"bolder"}
                >
                  EDUCATION
                </Text>
              </Box>
            </Flex>
          </Box>

          {canadianFirstTemplateData.education.map((item) => (
            <Box w={"100%"} pl={12}>
              <Flex w={"100%"} justify={"space-between"}>
                <Box w={"49%"}>
                  <Flex w={"100%"} direction={"column"}>
                    <Box w={"100%"}>
                      <Text italic fz={15} fw={"bold"}>
                        {item.degree}
                      </Text>
                    </Box>
                    <Box w={"100%"}>
                      <Text italic fz={15} fw={"bold"}>
                        {item.school}
                        {item.city === "" ? "" : `, ${item.city}`}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box pr={12} w={"49%"}>
                  <Flex w={"100%"} justify={"flex-end"}>
                    <Text>{item.endDate}</Text>
                  </Flex>
                </Box>
              </Flex>
              <Box w={"100%"} pl={15} pt={6}>
                <div
                  style={{
                    fontStyle: "italic",
                    color: "lightslategray",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${item.details}`,
                  }}
                />
              </Box>
            </Box>
          ))}

          {/* //! Education End Here */}
          {/* //? Language Skill From Here */}

          <Box p={12} w={"100%"}>
            <Flex direction={"column"} w={"100%"} h={"100%"}>
              <Box pl={12} w={"100%"} bg={"whitesmoke"} h={"100%"}>
                <Text
                  color={theme.colors.custom.heading1.light}
                  italic
                  fw={"bolder"}
                >
                  LANGUAGE
                </Text>
              </Box>
            </Flex>
          </Box>

          {
            canadianFirstTemplateData.languageSkills.map((item) => (
              <Box w={'100%'} pl={12} >
                  
              </Box>
            ))
          }

        </Flex>
      </Container>
    </>
  );
};

export default CanadianFirstTemplate;
