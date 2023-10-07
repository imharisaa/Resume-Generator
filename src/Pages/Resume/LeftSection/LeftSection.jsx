import React from "react";
import { useLeftSectionStyle } from "./LeftSection.style";
import PersonalDetails from "../../../components/PersonalDetail/PersonalDetail";
import ProfessionalSummary from "../../../components/ProfessionalSummary/ProfessionalSummary";
import { Box } from "@mantine/core";
import WorkHistory from "../../../components/WorkHistory/WorkHistory";
import WebsitesSocialLinks from "../../../components/Websites&SocialLinks/Websites&SocialLinks";
import Education from "../../../components/Education/Education";
import Skill from "../../../components/Skill/Skill";
import Language from "../../../components/Language/Language";

const LeftSection = () => {
  return (
    <>
      {/* <Box h={'100vh'}> */}
      <PersonalDetails />
      <ProfessionalSummary />
      <WorkHistory />
      <Education />
      <WebsitesSocialLinks />
      <Education />
      <Skill />
      <Language />
      {/* </Box> */}
    </>
  );
};

export default LeftSection;
