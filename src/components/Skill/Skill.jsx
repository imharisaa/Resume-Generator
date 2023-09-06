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

import { useSelector, useDispatch } from "react-redux";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { addSkill, deleteSkill, updateSkill } from "../../store/forms.reducer";

const Skill = () => {
  const websitesSocialLinks = useSelector((state) => state.forms.skills);
  const dispatch = useDispatch();
  return (
    <>
      <Container mih={"15rem"} mt={12} mb={12}>
        <Grid gutter={"lg"}>
          <Flex direction={"column"} h={"100%"}>
            <Title order={4}>Skills</Title>
            <Text size={".8rem"} color="gray">
              Choose 5 of the most important skills to show your talents! Make
              sure they match the keywords of the job listing if applying via on
              online system.
            </Text>
            <Accordion chevron={false} variant="separated" mt={12}>
              {websitesSocialLinks.map((item, key) => {
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
                            {item.skill !== "" ? item.skill : "Not Specified"}
                          </Title>
                          <Text color="gray" size={".9rem"}>
                            {item.level !== "" ? (
                              <Slider
                                disabled
                                radius={false}
                                size={"sm"}
                                w={"35%"}
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
                                dispatch(deleteSkill(key));
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
                                label="Skill"
                                variant="filled"
                                size="md"
                                onChange={(e) => {
                                  const level = item.level;
                                  const skill = e.target.value;
                                  dispatch(
                                    updateSkill({
                                      id: key,
                                      level,
                                      skill,
                                    })
                                  );
                                }}
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
                                        marks={[
                                          { value: 20, label: "Beginner" },
                                          { value: 40, label: "Skillfull" },
                                          { value: 70, label: "Experienced" },
                                          { value: 100, label: "Advance" },
                                        ]}
                                        onChange={(e) => {
                                          const level = e;
                                          const skill = item.skill;
                                          dispatch(
                                            updateSkill({
                                              id: key,
                                              level,
                                              skill,
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
                debugger;
                const newData = {
                  id: uuidv4(),
                  skill: "",
                  level: 0,
                };
                dispatch(addSkill(newData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconPlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Skill
                </Text>
              </Flex>
            </ActionIcon>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default Skill;
