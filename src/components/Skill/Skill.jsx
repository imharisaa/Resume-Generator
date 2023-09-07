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

import {
  IconCubePlus,
  IconFolderPlus,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGroupSkills,
  addSkill,
  addSkillGroup,
  deleteSkill,
  deleteSkillGroup,
  updateSkill,
  updateSkillGroup,
} from "../../store/forms.reducer";

let color = "red";

const Skill = () => {
  const skillsData = useSelector((state) => state.forms.skills);
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
              {skillsData.map((item, key) => {
                return (
                  <>
                    {item.groupId ? (
                      <Accordion.Item key={key} value={item.groupId}>
                        <Accordion.Control>
                          <Flex
                            w={"100%"}
                            justify={"space-between"}
                            align={"center"}
                          >
                            <Box w={"95%"}>
                              <Title order={5}>
                                {item.groupTitle !== ""
                                  ? item.groupTitle
                                  : "Not Specified"}
                              </Title>
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
                          <TextInput
                            label="Group Name"
                            variant="filled"
                            size="md"
                            onChange={(e) => {
                              const groupTitle = e.target.value;
                              const skills = item.skills;
                              dispatch(
                                updateSkill({
                                  id: key,
                                  groupId: item.groupId,
                                  groupTitle,
                                  skills,
                                })
                              );
                            }}
                          />
                          <Accordion
                            chevron={false}
                            variant="separated"
                            mt={12}
                          >
                            {item.skills.map((skillVal, gkey) => (
                              <Accordion.Item key={gkey} value={skillVal.id}>
                                <Accordion.Control>
                                  <Flex
                                    w={"100%"}
                                    justify={"space-between"}
                                    align={"center"}
                                  >
                                    <Box w={"95%"}>
                                      <Title order={5}>
                                        {skillVal.skill !== ""
                                          ? skillVal.skill
                                          : "Not Specified"}
                                      </Title>
                                      <Text color="gray" size={".9rem"}>
                                        {skillVal.level !== "" ? (
                                          <Slider
                                            // disabled
                                            radius={false}
                                            size={"sm"}
                                            w={"35%"}
                                            color={color}
                                            marks={[
                                              { value: 20, label: "." },
                                              { value: 40, label: "." },
                                              { value: 70, label: "." },
                                              { value: 100, label: "." },
                                            ]}
                                            value={skillVal.level}
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
                                            dispatch(
                                              deleteSkillGroup({
                                                key,
                                                gkey,
                                              })
                                            );
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
                                        <Flex
                                          w={"100%"}
                                          justify={"space-between"}
                                        >
                                          <TextInput
                                            w={"49%"}
                                            label="Skill"
                                            variant="filled"
                                            size="md"
                                            onChange={(e) => {
                                              const level = skillVal.level;
                                              const skill = e.target.value;
                                              const levelColor =
                                                skillVal.levelColor;
                                              dispatch(
                                                updateSkillGroup({
                                                  key,
                                                  gkey,
                                                  level,
                                                  skill,
                                                  levelColor,
                                                })
                                              );
                                            }}
                                          />
                                          <Box w={"49%"} h={"66.8px"}>
                                            <Flex
                                              direction={"column"}
                                              justify={"space-between"}
                                            >
                                              <Text>
                                                Level -- {skillVal.level}%
                                              </Text>
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
                                                    color={skillVal.levelColor}
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
                                                      const skill =
                                                        skillVal.skill;
                                                      const levelColor = color;
                                                      dispatch(
                                                        updateSkillGroup({
                                                          key,
                                                          gkey,
                                                          level,
                                                          skill,
                                                          levelColor,
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
                            ))}
                            <ActionIcon
                              variant="subtle"
                              color="cyan"
                              radius={"md"}
                              w={"100%"}
                              mt={12}
                              h={40}
                              mb={12}
                              onClick={() => {
                                const skillData = {
                                  id: uuidv4(),
                                  skill: "",
                                  level: 0,
                                  levelColor: "",
                                };
                                dispatch(addGroupSkills({ key, skillData }));
                              }}
                            >
                              <Flex w={"100%"} p={12}>
                                <IconCubePlus size={"1.5rem"} />
                                <Text pl={12} color="cyan">
                                  Add Skill
                                </Text>
                              </Flex>
                            </ActionIcon>
                          </Accordion>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ) : (
                      <Accordion.Item key={key} value={item.id}>
                        <Accordion.Control>
                          <Flex
                            w={"100%"}
                            justify={"space-between"}
                            align={"center"}
                          >
                            <Box w={"95%"}>
                              <Title order={5}>
                                {item.skill !== ""
                                  ? item.skill
                                  : "Not Specified"}
                              </Title>
                              <Text color="gray" size={".9rem"}>
                                {item.level !== "" ? (
                                  <Slider
                                    // disabled
                                    radius={false}
                                    size={"sm"}
                                    w={"35%"}
                                    color={color}
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
                                      const levelColor = item.levelColor;
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
                                            color={item.levelColor}
                                            marks={[
                                              { value: 20, label: "Beginner" },
                                              { value: 40, label: "Skillfull" },
                                              {
                                                value: 70,
                                                label: "Experienced",
                                              },
                                              { value: 100, label: "Advance" },
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
                                              const skill = item.skill;
                                              const levelColor = color;
                                              dispatch(
                                                updateSkill({
                                                  id: key,
                                                  level,
                                                  skill,
                                                  levelColor,
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
                    )}
                  </>
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
                  skill: "",
                  level: 0,
                  levelColor: "",
                };
                dispatch(addSkill(newData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconCubePlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Skill
                </Text>
              </Flex>
            </ActionIcon>

            <ActionIcon
              variant="subtle"
              color="cyan"
              radius={"md"}
              w={"100%"}
              mt={12}
              h={40}
              mb={12}
              onClick={() => {
                const newGroupedData = {
                  groupId: uuidv4(),
                  groupTitle: "",
                  skills: [],
                };

                dispatch(addSkillGroup(newGroupedData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconFolderPlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Group
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
