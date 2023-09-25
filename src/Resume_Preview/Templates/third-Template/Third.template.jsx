import { Box, Flex, Slider, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { useThirdTemplateStyle } from "./Third.template.style";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading6,
} from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";

const ThirdTemplate = () => {
  const {
    personal_details: { wantedJobTitle, firstName, lastName, email },
    websiteAndSocialLinks,
    skills,
  } = useSelector((state) => state.forms);
  const {
    classes: {
      Third_Template__container,
      Third_Template__col_1,
      Third_Template__col_2,
      Name_And_Profession__container,
      Contact_Component__container,
      Contact_Component__contact_heading,
      Contact_Component__content_email__container,
      Contact_Component__content_social_links__container,
      Skill_Component__container,
      Skill_Component__skills_heading,
      Skill_Component__skill_heading,
      Skill_Component__content_container,
    },
  } = useThirdTemplateStyle();

  const theme = useMantineTheme();

  return (
    <Box className={Third_Template__container} h={"297mm"} w={"210mm"}>
      <Box p={"12px"} className={Third_Template__col_2}>
        <Flex direction={"column"}>
          <ProfessionalSummary />
          <WorkHistory childPadding={"12px"} parentPadding={"12px"} />
          <Education />
        </Flex>
      </Box>

      <Box className={Third_Template__col_1}>
        {/* Personal details starts */}
        <Box
          w={"15rem"}
          mih={"100px"}
          mah={"fit-content"}
          className={Name_And_Profession__container}
        >
          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {firstName ? firstName : "Your Name"}
          </Heading1>

          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {lastName}
          </Heading1>

          <Text color={"gray"} pt={"3px"} size={"15px"}>
            {wantedJobTitle ? wantedJobTitle : "Profession"}
          </Text>
        </Box>
        {/* Personal details ends */}
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
              {email ? email : "a@gmail.com"}
            </Text>
          </Box>

          {websiteAndSocialLinks.map((item, key) => (
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
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading1.light}
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
      </Box>
    </Box>
  );
};

export default ThirdTemplate;

export function ProfessionalSummary({ padding }) {
  const thirdTemplateData = useSelector((state) => state.forms);
  return (
    <Box w={"100%"} p={padding ? padding : "24px"}>
      <div
        style={{
          color: "lightslategray",
        }}
        dangerouslySetInnerHTML={{
          __html: `${thirdTemplateData.professionalSummary.details}`,
        }}
      />
    </Box>
  );
}

export function WorkHistory({ className, childPadding, parentPadding }) {
  const thirdTemplateData = useSelector((state) => state.forms);
  const {
    classes: { Work_History_Component__heading_container },
  } = useThirdTemplateStyle();
  return (
    <Box w={"100%"} p={parentPadding} id="iddfie">
      <Box
        id="dfiddfoie"
        p={childPadding}
        className={
          className ? className : Work_History_Component__heading_container
        }
      >
        <Heading3>Work History</Heading3>
      </Box>
      {thirdTemplateData.employmentHistory.map((item, key) => {
        return (
          <Box w="100%" pt={"24px"}>
            <Flex justify={"space-between"} w={"100%"}>
              <Box w={"25%"}>
                {/* <Flex align={"center"} w={"100%"} h={"100%"}> */}
                <Text weight={"bolder"} color="#737272">
                  {`${item.startDate} - ${item.endDate}`}
                </Text>
                {/* </Flex> */}
              </Box>

              <Box w={"72%"}>
                <Heading4>{item.jobTitle}</Heading4>
                <Text italic>
                  {item.employer}
                  {item.city === "" ? "" : `, ${item.city}`}
                </Text>
                <Box w={"100%"} pl={24} pt={12}>
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
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}

export function Education() {
  const thirdTemplateData = useSelector((state) => state.forms);
  console.log(thirdTemplateData.education.detials);
  const {
    classes: { Work_History_Component__heading_container },
  } = useThirdTemplateStyle();
  return (
    <Box w={"100%"} p={"12px"}>
      <Box p={"12px"} className={Work_History_Component__heading_container}>
        <Heading3>Education</Heading3>
      </Box>
      {thirdTemplateData.education.map((item, key) => {
        return (
          <Box w="100%" pt={"24px"}>
            <Flex justify={"space-between"} w={"100%"}>
              <Box w={"25%"}>
                {/* <Flex align={"center"} w={"100%"} h={"100%"}> */}
                <Text weight={"bolder"} color="#737272">
                  {`${item.startDate} - ${item.endDate}`}
                </Text>
                {/* </Flex> */}
              </Box>

              <Box w={"72%"}>
                <Heading4>{item.school}</Heading4>
                <Text italic>
                  {item.degree}
                  {item.city === "" ? "" : `, ${item.city}`}
                </Text>
                <Box w={"100%"} pl={24} pt={12}>
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
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}
