import { ActionIcon, Box, Flex, Header, Title } from "@mantine/core";
import React from "react";

const Toolbar = () => {
  return (
    <>
      <Header h={65}>
        <Box h={"100%"} w={"100%"}>
          <Flex p={12} h={'100%'} justify={"space-between"} align={"center"} w={"100%"}>
            <Box w={"25rem"} h={'100%'}>
              <Flex w={'100%'} h={'100%'} align={'center'} >
                <Title order={4} color="gray" italic>
                  Permamotive Resume
                </Title>
              </Flex>
            </Box>
            <Box w={'67rem'} h={'100%'} >
              <Flex w={'100%'} h={'100%'} gap={15} justify={'flex-end'} align={'center'} >
                <ActionIcon component="a" href="/resume" variant="gradient" w={'10rem'} h={'35px'} >
                    <Title order={5} >Create Resume</Title>
                </ActionIcon>
                <ActionIcon component="a" href="/canadian-resume" variant="gradient" w={'15rem'} h={'35px'} >
                    <Title order={5} >Create Canadian Resume</Title>
                </ActionIcon>
                <ActionIcon component="a" href="/payment" variant="gradient" w={'10rem'} h={'35px'} >
                    <Title order={5} >Buy me a Coffee</Title>
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
