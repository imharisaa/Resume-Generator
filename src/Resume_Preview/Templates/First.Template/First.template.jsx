import { Box, Flex, Slider, Text, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useFirstTemplateStyle } from "./First.template.style";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading6,
} from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";
import { Document, View, Page, PDFDownloadLink } from "@react-pdf/renderer";
const FristTemplate = ({ pdfRef, divId }) => {
  const firstTemplateData = useSelector((state) => state.forms);
  const tStyle = useFirstTemplateStyle();

  const theme = useMantineTheme();

  console.log(firstTemplateData.templateType);
  if (!firstTemplateData.pdf)
    return (
      <InnerTemplate
        firstTemplateData={firstTemplateData}
        theme={theme}
        tStyle={tStyle}
        divId={divId}
      />
    );
  return (
    <div>
      <PDFDownloadLink
        document={
          <InnerTemplate
            firstTemplateData={firstTemplateData}
            theme={theme}
            tStyle={tStyle}
          />
        }
        fileName="Cv.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};
const InnerTemplate = ({ theme, tStyle, firstTemplateData, divId }) => {
  // const firstTemplateData = useSelector((state) => state.forms);
  const {
    classes: {
      First_Template__container,
      First_Template__col_1,
      First_Template__col_2,
      Name_And_Profession__container,
      Contact_Component__container,
      Contact_Component__contact_heading,
      Contact_Component__content_email__container,
      Contact_Component__content_social_links__container,
      Skill_Component__container,
      Skill_Component__skills_heading,
      Skill_Component__skill_heading,
      Skill_Component__content_container,
      Work_History_Component__heading_container,
    },
  } = tStyle;

  // const theme = useMantineTheme();

  console.log(firstTemplateData.templateType);

  return (
    // <Document>
    // <Page size={"A4"}>
    // <View>
    <Box
      id={divId}
      style={{
        overflowY: firstTemplateData.perviewMode ? "auto" : "hidden",
        overflowX: "hidden",
      }}
      className={First_Template__container}
      bg={"whitesmoke"}
      mah={"fit-content"}
      mih={"297mm"}
      w={"210mm"}
    >
      <Box className={First_Template__col_1}>
        <Box
          w={"15rem"}
          mih={"100px"}
          className={Name_And_Profession__container}
        >
          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.firstName
              ? firstTemplateData.personal_details.firstName
              : "Your Name"}
          </Heading1>
          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.lastName}
          </Heading1>
          <Text color={"gray"} pt={"3px"} size={"15px"}>
            {firstTemplateData.personal_details.wantedJobTitle
              ? firstTemplateData.personal_details.wantedJobTitle
              : "Profession"}
          </Text>
        </Box>
        <Box
          w={"15rem"}
          mih={"100px"}
          mah={"fit-content"}
          className={Contact_Component__container}
        >
          <Box className={Contact_Component__contact_heading}>
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading1.light}
            >
              Contact
            </Heading2>
          </Box>
          <Box className={Contact_Component__content_email__container}>
            <Heading6 width={"15rem"} alignment={"start"} color={"whitesmoke"}>
              E-mail
            </Heading6>
            <Text align={"start"} size={"15px"} color={"whitesmoke"}>
              {firstTemplateData.personal_details.email
                ? firstTemplateData.personal_details.email
                : "a@gmail.com"}
            </Text>
          </Box>
          <Box className={Contact_Component__content_email__container}>
            <Heading6 width={"15rem"} alignment={"start"} color={"whitesmoke"}>
              Phone Number
            </Heading6>
            <Text align={"start"} size={"15px"} color={"whitesmoke"}>
              {firstTemplateData.personal_details.phoneNumber
                ? firstTemplateData.personal_details.phoneNumber
                : "+90 333 323 32 32"}
            </Text>
          </Box>
          {firstTemplateData.websiteAndSocialLinks.map((item, key) => (
            <Box className={Contact_Component__content_social_links__container}>
              <Heading6
                width={"15rem"}
                alignment={"start"}
                color={"whitesmoke"}
              >
                {item.title}
              </Heading6>
              <Text style={{
              wordBreak: 'break-word'
            }} align={"start"} size={"15px"} color={"whitesmoke"}>
                {item.link}
              </Text>
            </Box>
          ))}
        </Box>
        <Box w={"15rem"} className={Skill_Component__container}>
          <Box mb={"12px"} className={Skill_Component__skills_heading}>
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading1.light}
            >
              Skills
            </Heading2>
          </Box>
          {firstTemplateData.skills.map((item, key) => {
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
                      <Box w="15rem" p={"12px"}>
                        <Box className={Skill_Component__content_container}>
                          <Heading6
                            width={"15rem"}
                            alignment={"start"}
                            color={"whitesmoke"}
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
        <Box w={"inherit"} className={Skill_Component__container}>
          {!firstTemplateData.languageSkills.length ? (
            ""
          ) : (
            <Box mb={"12px"} className={Skill_Component__skills_heading}>
              <Heading2
                width={"inherit"}
                alignment={"start"}
                color={theme.colors.custom.heading1.light}
              >
                Language Skill
              </Heading2>
            </Box>
          )}
          {firstTemplateData.languageSkills.map((item, key) => {
            let languageBeginner = "";
            let languageSkillFull = "";
            let languageExperienced = "";
            let languageAdvance = "";

            if (item.level <= 20) {
              languageBeginner = "Beginner";
            } else if (item.level <= 40) {
              languageSkillFull = "Skillfull";
            } else if (item.level <= 70) {
              languageExperienced = "Experienced";
            } else if (item.level <= 100) {
              languageAdvance = "Advance";
            }

            return (
              <Box w={"inherit"} mb={6} pb={6}>
                <Box w={"inherit"} p={"12px"}>
                  <Box className={Skill_Component__content_container}>
                    <Heading6
                      width={"inherit"}
                      alignment={"start"}
                      color={"whitesmoke"}
                    >
                      {item.title}
                    </Heading6>
                    {item.level === 0 ? (
                      ""
                    ) : (
                      <Slider
                        size={"md"}
                        w={"100%"}
                        radius={"lg"}
                        color={item.levelColor}
                        value={item.level}
                        marks={[
                          { value: 20, label: languageBeginner },
                          { value: 40, label: languageSkillFull },
                          { value: 70, label: languageExperienced },
                          { value: 100, label: languageAdvance },
                        ]}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box p={"12px"} className={First_Template__col_2}>
        <Flex direction={"column"}>
          <Box w={"100%"} p={"24px"}>
            <div
              style={{
                color: "lightslategray",
              }}
              dangerouslySetInnerHTML={{
                __html: `${firstTemplateData.professionalSummary.details}`,
              }}
            />
          </Box>

          <Box w={"100%"} p={"12px"}>
            <Box
              p={"12px"}
              className={Work_History_Component__heading_container}
            >
              <Heading3>Work History</Heading3>
            </Box>
            {firstTemplateData.employmentHistory.map((item, key) => {
              return (
                <Box w="100%" pt={"24px"}>
                  <Flex justify={"space-between"} w={"100%"}>
                    <Box w={"50%"}>
                      <Heading4>{item.jobTitle}</Heading4>
                      <Text italic>
                        {item.employer}
                        {item.city === "" ? "" : `, ${item.city}`}
                      </Text>
                    </Box>
                    <Box w={"50%"}>
                      <Flex align={"center"} w={"100%"} h={"100%"}>
                        <Text weight={"bolder"} color="#737272">
                          {`${item.startDate} - ${item.endDate}`}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Box w={"100%"} pl={48} pt={12}>
                    <div
                      style={{
                        color: "lightslategray",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `${item.details}`,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Box>
    // </View>
    // </Page>
    // </Document>
  );
};

export default FristTemplate;
