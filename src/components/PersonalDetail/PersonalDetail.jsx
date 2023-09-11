import {
  ActionIcon,
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  TextInput,
  Title
} from "@mantine/core";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetail } from "../../store/forms.reducer";
import { usePersonalDetailStyles } from "./PersonalDetail.style";

function PersonalDetail() {
  const {
    classes: { firstColumn, secondColumn },
  } = usePersonalDetailStyles();
  const personalDetailData = useSelector(
    (state) => state.forms.personal_details
  );
  const dispatch = useDispatch();
  const maxLength = 11
  function breakStringIntoWords(inputString, maxCharactersPerWord) {
    const words = inputString.split(' ');
    const formattedWords = [];
  
    for (const word of words) {
      if (word.length > maxCharactersPerWord) {
        const brokenWord = [];
        let currentChunk = '';
  
        for (let i = 0; i < word.length; i++) {
          currentChunk += word[i];
  
          if (currentChunk.length === maxCharactersPerWord) {
            brokenWord.push(currentChunk + '-');
            currentChunk = '';
          }
        }
  
        if (currentChunk) {
          brokenWord.push(currentChunk);
        }
  
        formattedWords.push(brokenWord.join(' '));
      } else {
        formattedWords.push(word);
      }
    }
  
    return formattedWords.join(' ');
  }

  const fieldsData = {
    address: personalDetailData.address,
    city: personalDetailData.city,
    countryName: personalDetailData.countryName,
    dateOfBirth: personalDetailData.dateOfBirth,
    drivingLicense: personalDetailData.drivingLicense,
    email: personalDetailData.email,
    firstName: personalDetailData.firstName,
    lastName: personalDetailData.lastName,
    nationality: personalDetailData.nationality,
    pfpUri: personalDetailData.pfpUri,
    phoneNumber: personalDetailData.phoneNumber,
    postalCode: personalDetailData.postalCode,
    placeOfBirth: personalDetailData.placeOfBirth,
    wantedJobTitle: personalDetailData.wantedJobTitle,
  };

  const pfpImgRef = useRef();

  return (
    <Container h={"38rem"} pt={24}>
      <Grid gutter="lg">
        <Title order={4}>Personal Info</Title>
        <Flex pos={'relative'} w={"100%"} align={"center"} h={"100%"} justify={"space-between"}>
          {/* First Column */}
          <Box className={firstColumn}>
            <TextInput
              w={"100%"}
              label="Wanted Job Title"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    wantedJobTitle: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="First Name"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                const firstName = breakStringIntoWords(e.target.value, maxLength)
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    firstName: firstName,
                  })
                );
              }}
            />
            <TextInput
              pt={12}
              size="md"
              variant="filled"
              w={"100%"}
              label="Email"
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({ ...fieldsData, email: e.target.value })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Country Name"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    countryName: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              pt={12}
              size="md"
              variant="filled"
              w={"100%"}
              label="Address"
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    address: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Driving License"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    drivingLicense: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Place of Birth"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    placeOfBirth: e.target.value,
                  })
                );
              }}
            />
          </Box>

          {/* Second Column */}
          <Box className={secondColumn}>
            <Box w={'100%'} h={'78.8px'}>
              <TextInput
                style={{display: 'none'}}
                pt={12}
                size="md"
                variant="filled"
                label="Upload Photo"
                type="file"
                w={"100%"}
                ref={pfpImgRef}
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
                      const reader = new FileReader();
                      reader.onload = function (e) {
                          const uri = e.target.result;
                          dispatch(updatePersonalDetail({ ...fieldsData, pfpUri: uri }))
                      }
                      reader.readAsDataURL(file)
                  }
                  
              }}
              />
              <Box pt={12} w={'100%'} h={'78.8px'}>
                <Flex justify={"center"} align={'flex-end'} w={'100%'} h={'100%'}>
                    <ActionIcon onClick={() => {
                      pfpImgRef.current.click()
                    }} variant="light" color="cyan" w={'100%'} h={'100%'}>
                      <Flex pl={5} justify={'flex-start'} align={'center'} w={'100%'} h={'100%'}>
                        <Avatar src={`${personalDetailData.pfpUri}`} color="teal" mr={10} size={60}/>
                        <Title order={4}>Upload Profile Picture</Title>
                      </Flex>
                    </ActionIcon>
                </Flex>
              </Box>
            </Box>
            <TextInput
              w={"100%"}
              label="Last Name"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                const lastName = breakStringIntoWords(e.target.value, maxLength)
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    lastName: lastName,
                  })
                );
              }}
            />
            <TextInput
              pt={12}
              size="md"
              variant="filled"
              w={"100%"}
              label="Phone"
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    phoneNumber: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              pt={12}
              size="md"
              variant="filled"
              w={"100%"}
              label="City"
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({ ...fieldsData, city: e.target.value })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Postal Code"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    postalCode: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Nationality"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    nationality: e.target.value,
                  })
                );
              }}
            />
            <TextInput
              w={"100%"}
              label="Date of Birth"
              variant="filled"
              size="md"
              pt={12}
              onChange={(e) => {
                dispatch(
                  updatePersonalDetail({
                    ...fieldsData,
                    dateOfBirth: e.target.value,
                  })
                );
              }}
            />
          </Box>
        </Flex>
      </Grid>
    </Container>
  );
}

export default PersonalDetail;
