import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import Toolbar from "../../components/Header/Toolbar";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import { qaData } from "../../utils/home-page-data";
import templateImgaeBlur from "../../assets/Templates_images_blur.png";
import templateEditor from "../../assets/Templates_Editor.png";
import firstTemplate from "../../assets/First_Template.png";
import canadianTemplate from "../../assets/Canadian_Template.png";

const Home = () => {
  const [data, setData] = useState(qaData);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Permresume - Professional Resume & Cover Letter Tools For Any Job
        </title>
        <meta
          name="desc"
          content="Unlock your career potential with Permresume - access our diverse collection of professional CV templates, including Canadian formats. Craft your perfect resume for free with our intuitive builder"
        />
      </Helmet>
      <Flex
        w={"100vw"}
        style={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
        h={"100vh"}
        direction={"column"}
        align={"flex-start"}
      >
        <Box w={"100%"}>
          <Toolbar />
        </Box>
        <Box h={"25rem"} className="banner_image">
          <Flex
            direction={"column"}
            justify={"space-evenly"}
            align={"center"}
            w={"100%"}
            h={"35rem"}
          >
            <Title color="whitesmoke">
              Permresume Builder Professional Resume & Cover Letter Tools For
              Any Job
            </Title>
            <ActionIcon
              component="a"
              href="/resume"
              variant="filled"
              color="teal"
              radius={15}
              w={"20rem"}
              h={"5rem"}
            >
              <Text fz={"1.2rem"} fw={"bolder"}>
                Try Our Resume Builder For Free
              </Text>
            </ActionIcon>
          </Flex>
        </Box>
        <QABannerComponent data={data} />
        <QutationComponent />
        <FirstQuationComponent />
        <SecondQuationComponent />
        <FamousTemplateComponent />

        <Box w={"100%"} h={"fit-content"}>
          <Flex w={"100%"} h={"60rem"}>
            <Flex
              style={{
                flex: "0 0 50%",
              }}
              justify={"flex-end"}
              align={"center"}
            >
              <Image width={"65%"} src={firstTemplate} />
            </Flex>
            <Flex
              direction={"column"}
              align={"flex-start"}
              justify={"center"}
              style={{
                flex: "0 0 50%",
              }}
            >
              <Box w={"100%"} h={"100%"}>
                <Flex
                  direction={"column"}
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                >
                  <Title>Cascade template</Title>

                  <Title
                    w={"50%"}
                    style={{
                      wordBreak: "break-all",
                    }}
                    align="center"
                    order={5}
                  >
                    Cascade uses a dots for your skills and language sections
                    and a sidebar with subtle shading differences.
                  </Title>
                  <Text align="center" w={'60%'}>
                    You can add, remove, and rearrange the sections and further
                    customize your resume, picking from dozens of color
                    combinations...
                  </Text>
                  <Box style={{
                    border: '1px solid red'
                  }} >

                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Home;

const QABannerComponent = ({ data }) => {
  return (
    <Box className="qa_banner">
      <Flex direction={"column"} align={"center"} w={"100%"} h={"100%"}>
        <Title pt={"100px"} pb={"100px"}>
          What are the benefits of Permresume Builder?
        </Title>
        <Box pb={60} w={"90rem"}>
          <Flex wrap={"wrap"} justify={"center"} w={"100%"}>
            {data.map((item, i) => {
              return (
                <Flex h={"10rem"} justify={"center"} w={"30rem"}>
                  <Box mr={10}>
                    <item.Icon />
                  </Box>
                  <Box h={"100%"} w={"75%"}>
                    <Flex h={"100%"} w={"100%"}>
                      <Box h={"100%"}>
                        <Box mb={10} mt={3}>
                          <Title order={4}>{item.title}</Title>
                        </Box>
                        <Box>
                          <Text>{item.descp}</Text>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const QutationComponent = () => {
  return (
    <Box className="qutation-container" h={"15rem"} w={"100%"}>
      <Flex justify={"center"} align={"center"} w={"100%"} h={"100%"}>
        <Text w={"60rem"} fw={"bold"} color="whitesmoke" fz={"1.5rem"}>
          <blockquote>
            <q>
              One of the most renowned writers on the topic of resume writing is
              Richard Nelson Bolles, author of "What Color is Your Parachute?"
              He said, "Your resume is an advertisement for yourself." This
              perspective underscores the idea that a resume should effectively
              market your skills and experiences to potential employers.
            </q>
          </blockquote>
        </Text>
      </Flex>
    </Box>
  );
};

const FirstQuationComponent = () => {
  return (
    <Box w={"100%"} h={"fit-content"}>
      <Flex direction={"column"} w={"100%"} h={"35rem"}>
        <Title w={"100%"} h={"10%"}>
          Why is Zety the best website to build your resume online?
        </Title>
        <Box w={"100%"} h={"90%"}>
          <Flex w={"100%"} h={"100%"}>
            <Flex
              justify={"center"}
              align={"center"}
              style={{
                flex: "0 0 50%",
              }}
            >
              <Box w={"32rem"} h={"12rem"}>
                <Flex
                  h={"100%"}
                  w={"100%"}
                  justify={"space-between"}
                  direction={"column"}
                >
                  <Title size={"1.6rem"} lh={1.5} color="#233143" order={4}>
                    Professional Templates
                  </Title>
                  <Text size={"1.2rem"} lh={1.5} color="#233143">
                    Select from a range of professional, elegant, creative, or
                    modern resume templates. Permresume's resume maker provides
                    18 templates, allowing you to effortlessly modify colors and
                    customize the layout for any resume format—be it functional,
                    reverse-chronological, or a combination thereof.
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              style={{
                flex: "0 0 50%",
              }}
            >
              <Image width={"95%"} src={templateImgaeBlur} />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const SecondQuationComponent = () => {
  return (
    <Box w={"100%"} h={"fit-content"}>
      <Flex direction={"column"} w={"100%"} h={"32rem"}>
        <Box w={"100%"} h={"90%"}>
          <Flex w={"100%"} h={"100%"}>
            <Flex
              justify={"center"}
              align={"center"}
              style={{
                flex: "0 0 50%",
              }}
            >
              <Image
                style={{
                  filter: "blur(1px)",
                }}
                width={"95%"}
                src={templateEditor}
              />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              style={{
                flex: "0 0 50%",
              }}
            >
              <Box w={"32rem"} h={"12rem"}>
                <Flex
                  h={"100%"}
                  w={"100%"}
                  justify={"space-between"}
                  direction={"column"}
                >
                  <Title size={"1.6rem"} lh={1.5} color="#233143" order={4}>
                    Edit Your Resume As You Like
                  </Title>
                  <Text size={"1.2rem"} lh={1.5} color="#233143">
                    Select your preferred font types, sizes, and spacing with
                    the ability to apply bold, italics, and underline to your
                    text. With no reliance on MS Word resume templates, our
                    platform manages formatting while providing access to
                    unparalleled resume designs.
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const FamousTemplateComponent = () => {
  return (
    <Box bg={"#081c4ed4"} w={"100%"} p={100}>
      <Flex
        w={"100%"}
        h={"50rem"}
        justify={"center"}
        align={"center"}
        direction={"column"}
      >
        <Flex
          mb={50}
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"100%"}
          h={"10%"}
        >
          <Box>
            <Title color="whitesmoke">
              Write your professional resume online For Free.
            </Title>
          </Box>
          <Box>
            <Text color="lightgray">
              Download with a single click. Land that dream job.
            </Text>
          </Box>
        </Flex>
        <Flex
          mt={50}
          justify={"space-evenly"}
          align={"center"}
          w={"80%"}
          h={"90%"}
        >
          <Box
            style={{
              backgroundImage: `url(${canadianTemplate})`,
              width: "25rem",
              height: "35rem",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></Box>
          <Box
            style={{
              backgroundImage: `url(${firstTemplate})`,
              width: "30rem",
              height: "45rem",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <ActionIcon
                component="a"
                href="/resume"
                w={"25rem"}
                h={"3rem"}
                variant="filled"
                color={"cyan"}
              >
                <Title order={5}>Make Fully Free Resume</Title>
              </ActionIcon>
            </Flex>
          </Box>
          <Box
            style={{
              backgroundImage: `url(${canadianTemplate})`,
              width: "25rem",
              height: "35rem",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></Box>
        </Flex>
      </Flex>
    </Box>
  );
};
