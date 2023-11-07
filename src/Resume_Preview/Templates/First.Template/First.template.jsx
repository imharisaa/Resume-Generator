import { Box, Flex, Slider, Text, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useFirstTemplateStyle } from "./First.template.style";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";
const FristTemplate = () => {
  const firstTemplateData = useSelector((state) => state.forms);
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
  } = useFirstTemplateStyle();

  const theme = useMantineTheme();

  return (
    <Box
      className={First_Template__container}
      bg={"whitesmoke"}
      h={"297mm"}
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
            fw={600}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.firstName
              ? firstTemplateData.personal_details.firstName
              : "Your Name"}
          </Heading1>
          <Heading1
            width={"15rem"}
            alignment={"center"}
            fw={600}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.lastName}
          </Heading1>
          <Text
            color={theme.colors.custom.heading1.lighter}
            pt={"3px"}
            size={"15px"}
            pl={15}
          >
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
          <Box id="jfoie" className={Contact_Component__contact_heading}>
            <Heading3
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading3.light}
            >
              Contact
            </Heading3>
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
          {firstTemplateData.websiteAndSocialLinks.map((item, key) => (
            <Box className={Contact_Component__content_social_links__container}>
              <Heading6
                width={"15rem"}
                alignment={"start"}
                color={"whitesmoke"}
              >
                {item.title}
              </Heading6>
              <Text align={"start"} size={"15px"} color={"whitesmoke"}>
                {item.link}
              </Text>
            </Box>
          ))}
        </Box>
        <Box w={"15rem"} className={Skill_Component__container}>
          <Box mb={"12px"} className={Skill_Component__skills_heading}>
            <Heading3
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading3.light}
            >
              Skills
            </Heading3>
          </Box>
          {firstTemplateData.skills.map((item, key) => {
            return (
              <Box
                w={"auto"}
                mb={"24px"}
                style={{
                  border: `${
                    item.groupTitle === "Skill Group Title"
                      ? ""
                      : item.groupTitle === ""
                      ? ""
                      : `2px solid ${theme.colors.custom.dark}`
                  }`,
                }}
                pb={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                    ? ""
                    : "20px"
                }
                ml={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                    ? ""
                    : "5px"
                }
                mr={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                    ? ""
                    : "5px"
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
                  mb={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                      ? "0"
                      : "10px"
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
                  <Heading5
                    width={"15rem"}
                    alignment={"start"}
                    color={theme.colors.custom.heading3.light}
                  >
                    {item.groupTitle === "Skill Group Title"
                      ? ""
                      : item.groupTitle === ""
                      ? ""
                      : item.groupTitle}
                  </Heading5>
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
                            fz={"0.7rem"}
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
  );
};

export default FristTemplate;
