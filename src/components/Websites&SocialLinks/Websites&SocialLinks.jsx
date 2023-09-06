import {
  Accordion,
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";

import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import {
  addWebSiteAndSocialLinks,
  deleteWebSiteAndSocialLinks,
  updateWebSiteAndSocialLinks,
} from "../../store/forms.reducer";

const WebsitesSocialLinks = () => {
  const websitesSocialLinks = useSelector(
    (state) => state.forms.websiteAndSocialLinks
  );
  const dispatch = useDispatch();
  return (
    <>
      <Container mih={"15rem"} mt={12} mb={12}>
        <Grid gutter={"lg"}>
          <Flex direction={"column"} h={"100%"}>
            <Title order={4}>Websites / Social Links</Title>
            <Text size={".8rem"} color="gray">
              You can add links to websites you wants hiring managers to see!
              Perphaps It will be a link to your portfoliio, Linkedin profile or
              personal website
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
                            {item.title !== "" ? item.title : "Not Specified"}
                          </Title>
                          <Text color="gray" size={".9rem"}>
                            {item.link !== "" ? item.link : "Not Specified"}
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
                                dispatch(deleteWebSiteAndSocialLinks(key));
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
                                label="Title"
                                variant="filled"
                                size="md"
                                onChange={(e) => {
                                  const title = e.target.value;
                                  const link = item.link;
                                  dispatch(
                                    updateWebSiteAndSocialLinks({
                                      key,
                                      title,
                                      link,
                                    })
                                  );
                                }}
                              />
                              <TextInput
                                w={"49%"}
                                label="Link"
                                variant="filled"
                                size="md"
                                onChange={(e) => {
                                  const title = item.title;
                                  const link = e.target.value;
                                  dispatch(
                                    updateWebSiteAndSocialLinks({
                                      key,
                                      title,
                                      link,
                                    })
                                  );
                                }}
                              />
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
                  link: "",
                };
                dispatch(addWebSiteAndSocialLinks(newData));
              }}
            >
              <Flex w={"100%"} p={12}>
                <IconPlus size={"1.5rem"} />
                <Text pl={12} color="cyan">
                  Add Website / Social Links
                </Text>
              </Flex>
            </ActionIcon>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default WebsitesSocialLinks;
