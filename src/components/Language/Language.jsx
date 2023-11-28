import {
  Accordion,
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Slider,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";

import { v4 as uuidv4 } from "uuid";

import { IconCubePlus, IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguageSkill,
  deleteLanguageSkill,
  updateLanguageSkill
} from "../../store/forms.reducer";

const Language = () => {
  let color = "";
  const languageSkillsData = useSelector((state) => state.forms.languageSkills);
  const dispatch = useDispatch();
  return (
    <>
      <Container mih={"15rem"} mt={46} mb={12}>
        <Grid gutter={"lg"}>
          <Flex direction={"column"} w={'100%'} h={"100%"}>
            <Title order={4}>Language</Title>
            <Accordion chevron={false} variant="separated" mt={12}>
              {languageSkillsData.map((item, key) => {
                return (
                  <Accordion.Item key={key} value={item.id}>
                    <Accordion.Control>
                      <Flex
                        w={"100%"}
                        justify={"space-between"}
                        align={"center"}
                      >
                        <Box w={"95%"}>
                          <Title order={5}>
                            {item.title !== "" ? item.title : "Not Specified"}
                          </Title>
                          <Text color="gray" size={".9rem"}>
                            {item.level !== "" ? (
                              <Slider
                                // disabled
                                radius={false}
                                size={"sm"}
                                w={"35%"}
                                color={item.levelColor}
                                marks={[
                                  { value: 20, label: "." },
                                  { value: 40, label: "." },
                                  { value: 70, label: "." },
                                  { value: 100, label: "." },
                                ]}
                                value={item.level}
                              />
                            ) : (
                              "Not Specified"
                            )}
                          </Text>
                        </Box>
                        <Box w={"5%"}>
                          <Flex w={"100%"} justify={"flex-end"}>
                            <ActionIcon
                              variant="subtle"
                              color="red"
                              w={"10px"}
                              radius={"md"}
                              onClick={() => {
                                dispatch(deleteLanguageSkill(key));
                              }}
                            >
                              <IconTrash size={"1.5rem"} />
                            </ActionIcon>
                          </Flex>
                        </Box>
                      </Flex>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Container h={"5rem"} mt={12}>
                        <Grid gutter={"lg"}>
                          <Box w={"100%"}>
                            <Flex w={"100%"} justify={"space-between"}>
                              <TextInput
                                w={"49%"}
                                label="Language"
                                variant="filled"
                                size="md"
                                onChange={(e) => {
                                  const title = e.target.value;
                                  const level = item.level;
                                  const levelColor = item.levelColor;
                                  dispatch(
                                    updateLanguageSkill({
                                      key,
                                      title,
                                      level,
                                      levelColor,
                                    })
                                  );
                                }}
                                newData
                              />
                              <Box w={"49%"} h={"66.8px"}>
                                <Flex
                                  direction={"column"}
                                  justify={"space-between"}
                                >
                                  <Text>Level -- {item.level}%</Text>
                                  <Box mt={3} h={"42px"}>
                                    <Flex
                                      w={"100%"}
                                      h={"100%"}
                                      justify={"center"}
                                    >
                                      <Slider
                                        size={"md"}
                                        w={"100%"}
                                        radius={"xl"}
                                        color={item.levelColor}
                                        defaultValue={item.level}
                                        marks={[
                                          {
                                            value: 20,
                                            label: "Beginner",
                                          },
                                          {
                                            value: 40,
                                            label: "Skillfull",
                                          },
                                          {
                                            value: 70,
                                            label: "Experienced",
                                          },
                                          {
                                            value: 100,
                                            label: "Advance",
                                          },
                                        ]}
                                        onChange={(e) => {
                                          if (e <= 20) {
                                            color = "red";
                                          } else if (e <= 40) {
                                            color = "yellow";
                                          } else if (e <= 70) {
                                            color = "cyan";
                                          } else if (e <= 100) {
                                            color = "green";
                                          }
                                          const level = e;
                                          const levelColor = color;
                                          const title = item.title;
                                          dispatch(
                                            updateLanguageSkill({
                                              key,
                                              level,
                                              levelColor,
                                              title,
                                            })
                                          );
                                        }}
                                      />
                                    </Flex>
                                  </Box>
                                </Flex>
                              </Box>
                            </Flex>
                          </Box>
                        </Grid>
                      </Container>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
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
                  title: "",
                  level: 0,
                  levelColor: "",
                };
                dispatch(addLanguageSkill(newData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconCubePlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Language Skill
                </Text>
              </Flex>
            </ActionIcon>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default Language;
