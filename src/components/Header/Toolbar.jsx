import {
  ActionIcon,
  Box,
  Flex,
  Header,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const Toolbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header h={65}>
        <Box h={"100%"} w={"100%"}>
          <Flex
            p={12}
            h={"100%"}
            justify={"space-between"}
            align={"center"}
            w={"100%"}
          >
            <Box w={"25rem"} h={"100%"}>
              <Flex w={"100%"} h={"100%"} align={"center"}>
                <Title order={4} color="gray" italic>
                  Permamotive Resume
                </Title>
              </Flex>
            </Box>
            <Box w={"67rem"} h={"100%"}>
              <Flex w={"100%"} h={"100%"} justify={"flex-end"} align={"center"}>
                
                <ActionIcon
                  onClick={open}
                  variant="gradient"
                  w={"15rem"}
                  h={"35px"}
                >
                  <Title order={5}>Select Template Type</Title>
                </ActionIcon>

                <Modal opened={opened} onClose={close} title={"Template Type"}>
                  <Text>Please select your template type</Text>

                  <Flex direction={"column"} h={'10rem'} justify={'space-evenly'} >
                    <ActionIcon
                      component="a"
                      href="/resume"
                      variant="gradient"
                      onClick={() => {
                        localStorage.setItem('templateStyle', "NormalTemplate")
                      }}
                      w={"100%"}
                      h={"35px"}
                    >
                      <Title order={5}>Normal Template Type</Title>
                    </ActionIcon>

                    <ActionIcon
                      component="a"
                      href="/resume"
                      variant="gradient"
                      onClick={() => {
                        localStorage.setItem('templateStyle', "CanadianTemplate")
                      }}
                      w={"100%"}
                      h={"35px"}
                    >
                      <Title order={5}>Canadian Template Type</Title>
                    </ActionIcon>

                    <ActionIcon
                      component="a"
                      href="/resume"
                      variant="gradient"
                      onClick={() => {
                        localStorage.setItem('templateStyle', "BothTemplate")
                      }}

                      w={"100%"}
                      h={"35px"}
                    >
                      <Title order={5}>Both Template Type</Title>
                    </ActionIcon>
                  </Flex>
                </Modal>

                <ActionIcon
                  ml={12}
                  component="a"
                  href="/payment"
                  variant="gradient"
                  w={"10rem"}
                  h={"35px"}
                >
                  <Title order={5}>Buy me a Coffee</Title>
                </ActionIcon>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Header>
    </>
  );
};

export default Toolbar;
