import { Container, Flex, Grid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from "react-redux";
import { updateProfessionalSummary } from "../../store/forms.reducer";

const ProfessionalSummary = () => {

    const professionalSummaryData = useSelector(state => state.forms.professionalSummary)
    const dispatch = useDispatch()
    const data = professionalSummaryData.details.reduce((acc, data) => {
      acc += data
      return acc
    }, "")
    const [ deatils, setDetail ] = useState(data)

    return (
    <>
      <Container h={"30rem"} pt={96}>
        <Grid gutter={"lg"}>
          <Flex h={"100%"} direction={'column'}>
            <Title order={4}>Professional Summary</Title>
            <Text color="gray" size={'.8rem'}>
              Write 6-7 short & energetic sentences to interest the reader!
              Mention your role, experience & most importantly - your biggest
              achievements, best qualities and skills.
            </Text>
            <ReactQuill theme="snow" defaultValue={deatils} value={deatils} onChange={(e) => {
              setDetail(e)
              dispatch(updateProfessionalSummary([deatils]))
            }} style={{height: '15rem', paddingTop: 12}} />
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default ProfessionalSummary;
