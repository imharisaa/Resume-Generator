import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const CanadianSecondTemplate = ({ pdfRef, divId }) => {
  const theme = useMantineTheme();
  const canadianSecondTemplateData = useSelector((state) => state.forms);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Permresume | Free Canadian Resume Template</title>
      </Helmet>
      <Container
        className="resume-container"
        mih={"297mm"}
        w={"210mm"}
        ref={pdfRef}
        id={divId}
        p={20}
        style={{ backgroundColor: "#f0f2f5", borderRadius: "10px" }}
      >
        <Flex direction={"column"} w={"100%"} h={"100%"} gap={20}>
          {/* Header Section */}
          <Flex
            justify={"space-between"}
            align={"flex-start"}
            h={"auto"}
            w={"100%"}
            bg="#2e3440"
            p={20}
            borderRadius="10px"
            color="white"
          >
            <Box>
              <Title order={2} style={{ color: "#88c0d0" }}>
                {canadianSecondTemplateData.personal_details.firstName}{" "}
                {canadianSecondTemplateData.personal_details.lastName}
              </Title>
              <Text>{canadianSecondTemplateData.personal_details.wantedJobTitle}</Text>
            </Box>
            <Box textAlign="right">
              <Text>{canadianSecondTemplateData.personal_details.email}</Text>
              <Text>{canadianSecondTemplateData.personal_details.phoneNumber}</Text>
              <Text>
                {canadianSecondTemplateData.personal_details.city},{" "}
                {canadianSecondTemplateData.personal_details.countryName}
              </Text>
            </Box>
          </Flex>

          {/* Professional Summary */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Professional Summary
            </Text>
            <Text style={{ color: "#4c566a", lineHeight: 1.6 }}>
              {canadianSecondTemplateData.professionalSummary.details}
            </Text>
          </Box>

          {/* Career Expertise */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Career Expertise
            </Text>
            {canadianSecondTemplateData.employmentHistory.map((job, index) => (
              <Box key={index} mb={15}>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text weight={700}>{job.jobTitle}</Text>
                    <Text>{job.employer}</Text>
                  </Box>
                  <Text align="right">
                    {job.startDate} - {job.endDate}
                  </Text>
                </Flex>
                <Text color="#4c566a">{job.details}</Text>
              </Box>
            ))}
          </Box>

          {/* Skills */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Core Skills
            </Text>
            <Flex wrap="wrap" gap={10}>
              {canadianSecondTemplateData.skills.map((skillGroup, groupIndex) =>
                skillGroup.skills.map((skill, skillIndex) => (
                  <Box key={`${groupIndex}-${skillIndex}`} p={10} bg="#d8dee9" borderRadius="5px">
                    <Text color="#2e3440">{skill.skill}</Text>
                  </Box>
                ))
              )}
            </Flex>
          </Box>

          {/* Links */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Links
            </Text>
            <Flex direction="column" gap={5}>
              {canadianSecondTemplateData.websiteAndSocialLinks.map((link, index) => (
                <Text key={index}>{link.title}: {link.link}</Text>
              ))}
            </Flex>
          </Box>

          {/* Education */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Education
            </Text>
            {canadianSecondTemplateData.education.map((education, index) => (
              <Box key={index} mb={15}>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text weight={700}>{education.degree}</Text>
                    <Text>{education.school}</Text>
                  </Box>
                  <Text align="right">{education.endDate}</Text>
                </Flex>
                <Text color="#4c566a">{education.details}</Text>
              </Box>
            ))}
          </Box>

          {/* Languages */}
          <Box p={20} bg="white" borderRadius="10px">
            <Text color="#2e3440" weight={700} size="lg" mb={10}>
              Languages
            </Text>
            {canadianSecondTemplateData.languageSkills.map((language, index) => (
              <Box key={index} mb={10}>
                <Text>{language.title}</Text>
                <Text color="#4c566a">{language.level}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CanadianSecondTemplate;
