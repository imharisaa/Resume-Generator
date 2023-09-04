import { createSlice } from "@reduxjs/toolkit";


const formsSlice = createSlice({
    name: 'forms',
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
            details: ''
        },
        employmentHistory: [
            {
             id: '',
             jobTitle: "",
             employer: "",
             startDate: "",
             endDate: "",
             city: "",
             details: '',
            }
        ]

    },
    reducers: {

    }
});

export const reducer = formsSlice.actions;
export default formsSlice.reducer