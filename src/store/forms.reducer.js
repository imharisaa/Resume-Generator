import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
  name: "forms",
  initialState: {
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
      details: "",
    },
    employmentHistory: [],
    education: [],
    websiteAndSocialLinks: [],
    skills: [],
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
      debugger;
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
      debugger;
      state.skills.push(data.payload);
    },
    updateSkill(state, data) {
      state.skills[data.payload.id].skill = data.payload.skill;
      state.skills[data.payload.id].level = data.payload.level;
    },
    deleteSkill(state, data) {
      state.skills.splice(data.payload, 1);
    },

    //? Professional Summary Reducers

    updateProfessionalSummary(state, data) {
      state.professionalSummary.details = data.payload
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
  updatePersonalDetail
} = formsSlice.actions;
export default formsSlice.reducer;