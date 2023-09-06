import {
  Accordion,
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import { useSelector, useDispatch } from "react-redux";
import { addWorkHistory, deleteWorkHistory, updateWorkHistory } from "../../store/forms.reducer";
import { IconPlus, IconTrash } from "@tabler/icons-react";

import { v4 as uuidv4 } from "uuid";

const WorkHistory = () => {
  const workHistoryData = useSelector((state) => state.forms.employmentHistory);
  const dispatch = useDispatch();

  return (
    <>
      <Container mih={"15rem"} mt={12}>
        <Grid gutter={"lg"}>
          <Flex direction={"column"} h={"100%"}>
            <Title order={4}>Work History</Title>
            <Text size={".8rem"} color="gray">
              Show your relevant experience (last 10 years). Use bullet point to
              note your achievement. if possible - use no./facts (Achived X,
              measured by Y. by doing Z)
            </Text>

            {/* <Group> */}
            <Accordion chevron={false} variant="separated" mt={12}>
              {workHistoryData.map((item, key) => (
                <Accordion.Item key={key} value={item.id}>
                  <Accordion.Control>
                    <Flex w={"100%"} justify={"space-between"} align={"center"}>
                      <Box w={"95%"}>
                        <Title order={5}>
                          {item.jobTitle !== ""
                            ? `${item.jobTitle} - ${item.employer}`
                            : "Not Specified"}
                        </Title>
                        <Text color="gray" size={".9rem"}>
                          {item.startDate !== ""
                            ? `${item.startDate} - ${item.endDate}`
                            : "Not Specified"}
                        </Text>
                      </Box>
                      <Box w={"5%"}>
                        <Flex w={'100%'} justify={'flex-end'}>
                          <ActionIcon
                            variant="subtle"
                            color="red"
                            w={'10px'}
                            radius={"md"}
                            onClick={() => {
                              dispatch(deleteWorkHistory(key));
                            }}
                          >
                            <IconTrash size={"1.5rem"} />
                          </ActionIcon>
                        </Flex>
                      </Box>
                    </Flex>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Container h={"20rem"} pt={12}>
                      <Grid gutter={"lg"}>
                        <Flex w={"100%"} direction={"column"}>
                          <Box w={"100%"}>
                            <Flex justify={"space-between"} w={"100%"}>
                              <Box w={"49%"}>
                                <TextInput
                                  w={"100%"}
                                  label="Job Title"
                                  variant="filled"
                                  size="md"
                                  pt={12}
                                  onChange={(e) => {
                                    const jobTitle = e.target.value;
                                    const employer = item.employer;
                                    const startDate = item.startDate;
                                    const endDate = item.endDate;
                                    const city = item.city;
                                    const details = item.details;
                                    dispatch(
                                      updateWorkHistory({
                                        id: key,
                                        startDate,
                                        endDate,
                                        employer,
                                        jobTitle,
                                        city,
                                        details,
                                      })
                                    );
                                  }}
                                />
                                <Flex w={"100%"} justify={"space-between"}>
                                  <DateInput
                                    valueFormat="DD/MMM/YYYY"
                                    label="Start Date"
                                    size="md"
                                    variant="filled"
                                    pt={12}
                                    w={"49%"}
                                    onChange={(e) => {
                                      const dateInput = new Date(e);
                                      const sday = dateInput
                                        .getDate()
                                        .toString()
                                        .padStart(2, "0");
                                      const smonth = dateInput.toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                        }
                                      );
                                      const syear = dateInput.getFullYear();

                                      const startDate = `${sday}/${smonth}/${syear}`;
                                      const jobTitle = item.jobTitle;
                                      const employer = item.employer;
                                      const endDate = item.endDate;
                                      const city = item.city;
                                      const details = item.details;
                                      dispatch(
                                        updateWorkHistory({
                                          id: key,
                                          startDate,
                                          endDate,
                                          employer,
                                          jobTitle,
                                          city,
                                          details,
                                        })
                                      );
                                    }}
                                  />
                                  <DateInput
                                    valueFormat="DD/MMM/YYYY"
                                    label="End Date"
                                    size="md"
                                    variant="filled"
                                    pt={12}
                                    w={"49%"}
                                    onChange={(e) => {
                                      const dateInput = new Date(e);
                                      const sday = dateInput
                                        .getDate()
                                        .toString()
                                        .padStart(2, "0");
                                      const smonth = dateInput.toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                        }
                                      );
                                      const syear = dateInput.getFullYear();

                                      const endDate = `${sday}/${smonth}/${syear}`;
                                      const jobTitle = item.jobTitle;
                                      const employer = item.employer;
                                      const startDate = item.startDate;
                                      const city = item.city;
                                      const details = item.details;
                                      dispatch(
                                        updateWorkHistory({
                                          id: key,
                                          startDate,
                                          endDate,
                                          employer,
                                          jobTitle,
                                          city,
                                          details,
                                        })
                                      );
                                      // setEndDate(e);
                                      // dateFormater();
                                    }}
                                  />
                                </Flex>
                              </Box>
                              <Box w={"49%"}>
                                <TextInput
                                  w={"100%"}
                                  label="Employer"
                                  variant="filled"
                                  size="md"
                                  pt={12}
                                  onChange={(e) => {
                                    const employer = e.target.value;
                                    const jobTitle = item.jobTitle;
                                    const startDate = item.startDate;
                                    const endDate = item.endDate;
                                    const city = item.city;
                                    const details = item.details;
                                    dispatch(
                                      updateWorkHistory({
                                        id: key,
                                        startDate,
                                        endDate,
                                        employer,
                                        jobTitle,
                                        city,
                                        details,
                                      })
                                    );
                                  }}
                                />
                                <TextInput
                                  w={"100%"}
                                  label="City"
                                  variant="filled"
                                  size="md"
                                  pt={12}
                                  onChange={(e) => {
                                    const city = e.target.value;
                                    const jobTitle = item.jobTitle;
                                    const employer = item.employer;
                                    const startDate = item.startDate;
                                    const endDate = item.endDate;
                                    const details = item.details;
                                    dispatch(
                                      updateWorkHistory({
                                        id: key,
                                        startDate,
                                        endDate,
                                        employer,
                                        jobTitle,
                                        city,
                                        details,
                                      })
                                    );
                                  }}
                                />
                              </Box>
                            </Flex>
                          </Box>
                          <Box w={"100%"}>
                            <ReactQuill
                              style={{
                                height: "7rem",
                                paddingTop: 24,
                              }}
                              theme="snow"
                              value={item.details}
                              onChange={(e) => {
                                const jobTitle = item.jobTitle;
                                const employer = item.employer;
                                const startDate = item.startDate;
                                const endDate = item.endDate;
                                const city = item.city;
                                const details = e;
                                dispatch(
                                  updateWorkHistory({
                                    id: key,
                                    startDate,
                                    endDate,
                                    employer,
                                    jobTitle,
                                    city,
                                    details,
                                  })
                                );
                              }}
                            />
                          </Box>
                        </Flex>
                      </Grid>
                    </Container>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
            {/* </Group> */}
            <ActionIcon
              variant="subtle"
              color="cyan"
              radius={"md"}
              w={"100%"}
              mt={12}
              h={40}
              mb={12}
              onClick={() => {
                const newData = {
                  id: uuidv4(),
                  jobTitle: "",
                  employer: "",
                  startDate: "",
                  endDate: "",
                  city: "",
                  details: "",
                };
                dispatch(addWorkHistory(newData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconPlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Work History
                </Text>
              </Flex>
            </ActionIcon>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default WorkHistory;
