import { createSlice } from "@reduxjs/toolkit";


const formsSlice = createSlice({
  name: "forms",
  initialState: {
    // template: `${}`,
    personal_details: {
      wantedJobTitle: "",
      pfpUri: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      countryName: "",
      city: "",
      address: "",
      postalCode: "",
      drivingLicense: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
    },
    professionalSummary: {
      details: `<p>Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.</p>`,
    },
    employmentHistory: [],
    education: [],
    websiteAndSocialLinks: [],
    skills: [
      {
        groupId: "c3593bc4-0d1f-4bf6-bb74-95214a6d7c89",
        groupTitle: "Skill Group Title",
        skills: [],
      },
    ],
  },
  reducers: {
    //? Work History Reducers

    addWorkHistory(state, data) {
      state.employmentHistory.push(data.payload);
    },
    updateWorkHistory(state, data) {
      state.employmentHistory[data.payload.id].jobTitle = data.payload.jobTitle;
      state.employmentHistory[data.payload.id].startDate =
        data.payload.startDate;
      state.employmentHistory[data.payload.id].endDate = data.payload.endDate;
      state.employmentHistory[data.payload.id].employer = data.payload.employer;
      state.employmentHistory[data.payload.id].city = data.payload.city;
      state.employmentHistory[data.payload.id].details = data.payload.details;
      state.employmentHistory[data.payload.id].present = data.payload.present;
    },
    deleteWorkHistory(state, data) {
      state.employmentHistory.splice(data.payload, 1);
    },

    //? Website And Social Links Reducers

    addWebSiteAndSocialLinks(state, data) {
      state.websiteAndSocialLinks.push(data.payload);
    },
    updateWebSiteAndSocialLinks(state, data) {
      state.websiteAndSocialLinks[data.payload.key].link = data.payload.link;
      state.websiteAndSocialLinks[data.payload.key].title = data.payload.title;
    },
    deleteWebSiteAndSocialLinks(state, data) {
      state.websiteAndSocialLinks.splice(data.payload, 1);
    },

    //? Education Reducers

    addEducation(state, data) {
      state.education.push(data.payload);
    },
    updateEducation(state, data) {
      state.education[data.payload.id].school = data.payload.school;
      state.education[data.payload.id].startDate = data.payload.startDate;
      state.education[data.payload.id].endDate = data.payload.endDate;
      state.education[data.payload.id].degree = data.payload.degree;
      state.education[data.payload.id].city = data.payload.city;
      state.education[data.payload.id].details = data.payload.details;
    },
    deleteEducation(state, data) {
      state.education.splice(data.payload, 1);
    },

    //? Skills Reducers

    addSkill(state, data) {
      state.skills.push(data.payload);
    },
    updateSkill(state, data) {
      if (data.payload.groupId) {
        state.skills[data.payload.id].groupTitle = data.payload.groupTitle;
        state.skills[data.payload.id].skills = data.payload.skills;
      }

      state.skills[data.payload.id].skill = data.payload.skill;
      state.skills[data.payload.id].level = data.payload.level;
      state.skills[data.payload.id].levelColor = data.payload.levelColor;
    },
    deleteSkill(state, data) {
      state.skills.splice(data.payload, 1);
    },

    //? Professional Summary Reducers

    updateProfessionalSummary(state, data) {
      state.professionalSummary.details = data.payload;
    },

    //? Personal Detail Reducers

    updatePersonalDetail(state, data) {
      state.personal_details.address = data.payload.address;
      state.personal_details.city = data.payload.city;
      state.personal_details.countryName = data.payload.countryName;
      state.personal_details.dateOfBirth = data.payload.dateOfBirth;
      state.personal_details.drivingLicense = data.payload.drivingLicense;
      state.personal_details.email = data.payload.email;
      state.personal_details.firstName = data.payload.firstName;
      state.personal_details.lastName = data.payload.lastName;
      state.personal_details.nationality = data.payload.nationality;
      state.personal_details.pfpUri = data.payload.pfpUri;
      state.personal_details.phoneNumber = data.payload.phoneNumber;
      state.personal_details.postalCode = data.payload.postalCode;
      state.personal_details.placeOfBirth = data.payload.placeOfBirth;
      state.personal_details.wantedJobTitle = data.payload.wantedJobTitle;
    },

    //? Grouped Skills Reducers

    addSkillGroup(state, data) {
      state.skills.push(data.payload);
    },

    updateSkillGroup(state, data) {
      state.skills[data.payload.key].skills[data.payload.gkey].skill =
        data.payload.skill;
      state.skills[data.payload.key].skills[data.payload.gkey].level =
        data.payload.level;
      state.skills[data.payload.key].skills[data.payload.gkey].levelColor =
        data.payload.levelColor;
    },
    deleteSkillGroup(state, data) {
      state.skills[data.payload.key].skills.splice(data.payload.gkey, 1);
    },

    //? add skill in group skills

    addGroupSkills(state, data) {
      state.skills[data.payload.key].skills.push(data.payload.skillData);
    },

    uploadCVData(state, data) {
      debugger
      state.education = data.payload.education
      state.employmentHistory = data.payload.employmentHistory
      state.personal_details = data.payload.personal_details
      state.professionalSummary = data.payload.professionalSummary
      state.skills = data.payload.skills
      state.websiteAndSocialLinks = data.payload.websiteAndSocialLinks
    }
  },



});

export const {
  addWorkHistory,
  updateWorkHistory,
  deleteWorkHistory,
  addWebSiteAndSocialLinks,
  updateWebSiteAndSocialLinks,
  deleteWebSiteAndSocialLinks,
  addEducation,
  updateEducation,
  deleteEducation,
  addSkill,
  updateSkill,
  deleteSkill,
  updateProfessionalSummary,
  updatePersonalDetail,
  addSkillGroup,
  updateSkillGroup,
  deleteSkillGroup,
  addGroupSkills,
  uploadCVData
} = formsSlice.actions;
export default formsSlice.reducer;
