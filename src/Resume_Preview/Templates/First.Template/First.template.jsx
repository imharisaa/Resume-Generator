import { Box, Flex, Slider, Text, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState, useRef } from "react";
import { useFirstTemplateStyle } from "./First.template.style";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading6,
} from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";
import { Document, View, Page, PDFDownloadLink } from "@react-pdf/renderer";
import { Splitter } from "@react-pdf-viewer/core";
import { setData } from "../../../store/forms.reducer";
const FristTemplate = ({ pdfRef, divId }) => {
  const firstTemplateData = useSelector((state) => state.forms);
  const tStyle = useFirstTemplateStyle();

  const theme = useMantineTheme();

  console.log(firstTemplateData.templateType);
  if (!firstTemplateData.pdf)
    return (
      <InnerTemplate
        firstTemplateData={firstTemplateData}
        theme={theme}
        tStyle={tStyle}
        divId={divId}
      />
    );
  return (
    <div>
      <PDFDownloadLink
        document={
          <InnerTemplate
            firstTemplateData={firstTemplateData}
            theme={theme}
            tStyle={tStyle}
          />
        }
        fileName="Cv.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

function splitDivContent(divId, newHeight) {
  const div = document.getElementById(divId);

  // Reading the current height and inner text of the given div
  const currentHeight = div.clientHeight;
  const innerText = div.innerText;

  // Resetting the height of the given div to the new height
  div.style.height = `${newHeight}px`;

  // Splitting the inner text into two parts to fit the new height
  const words = innerText.split(' ');
  let firstPart = '';
  let secondPart = '';
  let currentPart = '';

  for (let i = 0; i < words.length; i++) {
    currentPart += words[i] + ' ';
    div.innerText = currentPart;

    if (div.clientHeight > newHeight) {
      secondPart = innerText.substring(currentPart.length);
      break;
    }

    firstPart = currentPart;
  }

  // Creating a new div for the remaining text with auto height
  const newDiv = document.createElement('div');
  newDiv.innerText = secondPart;
  newDiv.style.height = 'auto';
  newDiv.style.pageBreakBefore = 'always';

  // Copying styles from the original div to the new div
  const computedStyles = window.getComputedStyle(div);
  Array.from(computedStyles).forEach((key) => {
    newDiv.style[key] = computedStyles[key];
  });

  // Appending the new div after the given div
  div.insertAdjacentElement('afterend', newDiv);
}

class ContentSplitter {
  constructor(tag, childDivMaxPossibleHeight ,segmentDivHeight) {
    // this.div = document.getElementById(divId);
    this.div = tag;
    this.newHeight = childDivMaxPossibleHeight;
    this.innerContent = this.div.innerHTML || this.div.innerText;
    this.isHTML = /<[a-z][\s\S]*>/i.test(this.innerContent);
    this.segmentDivHeight = segmentDivHeight; 
  }

  splitContent() {
    this.div.style.height = `${this.newHeight}px`;

    let firstPart = '';
    let secondPart = '';

    if (this.isHTML) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = this.innerContent;

      let tempInnerHTML = '';

      for (let i = 0; i < tempDiv.children.length; i++) {
        const child = tempDiv.children[i];
        tempInnerHTML += child.outerHTML;
        tempDiv.innerHTML = tempInnerHTML;

        if (tempDiv.clientHeight > this.newHeight) {
          const lastChildIndex = tempDiv.children[i - 1] ? i - 1 : i;
          const lastChild = tempDiv.children[lastChildIndex];
          const tag = lastChild.tagName.toLowerCase();
          const closingTag = `</${tag}>`;

          const firstPartContent = tempInnerHTML.substring(
            0,
            tempInnerHTML.lastIndexOf(closingTag) + closingTag.length
          );
          firstPart = firstPartContent;

          const openingTag = `<${tag}>`;
          secondPart = openingTag + this.innerContent.substring(firstPartContent.length);
          break;
        }

        firstPart = tempInnerHTML;
      }
    } else {
      // Splitting logic for plain text remains the same as previous implementation
      const words = this.innerContent.split(' ');
      let currentPart = '';

      for (let i = 0; i < words.length; i++) {
        currentPart += words[i] + ' ';
        this.div.innerHTML = currentPart;

        if (this.div.clientHeight > this.newHeight) {
          secondPart = this.innerContent.substring(currentPart.length);
          break;
        }

        firstPart = currentPart;
      }
    }

  return {details:[firstPart, secondPart], isHTML:this.isHTML};
  }
}

function mmToPx(mm) {
  const inches = mm / 25.4; // 1 inch = 25.4 millimeters
  const pixels = inches * 96; // Assuming 96 pixels per inch (PPI)
  return pixels;
}

function pxToMm(px) {
  const inches = px / 96; // Assuming 96 pixels per inch (PPI)
  const millimeters = inches * 25.4; // 1 inch = 25.4 millimeters
  return millimeters;
}
function getYPositionDifference(parentRef, childRef, counter) {

  const parentRect = parentRef.current.getBoundingClientRect();
  const grandChildRect = childRef.current.getBoundingClientRect();

  const parentTop = parentRect.top;

  const grandChildBottom = grandChildRect.bottom;
  const parentBottom = parentRect.bottom
  const difference = grandChildBottom - parentTop;
  const accuratePageHeight = mmToPx(297) * counter;
  const segmentDivHeight = grandChildRect.bottom - accuratePageHeight  
  const childDivMaxPossibleHeight = accuratePageHeight- grandChildRect.top 

  if (difference > accuratePageHeight) {
    return { pageBreak: true, childDivMaxPossibleHeight , segmentDivHeight}
  }
  return { pageBreak: false }
}

const PText = ({ parentRef, data, style }) => {
  const divRef = useRef(null);
  const counter = useSelector((state) => state.forms.counter)
  useEffect(() => {
    if (divRef.current) {
      debugger
      const { pageBreak, childDivMaxPossibleHeight , segmentDivHeight } = getYPositionDifference(parentRef, divRef, counter)
      if(pageBreak){
        const splitter = new ContentSplitter(divRef.current, childDivMaxPossibleHeight, segmentDivHeight)
        const {details} = splitter.splitContent()
        setData({...data, details})

      }
    }
  }, [data.details ]);
  if (data.details.length > 1)
    return (
      <>

        {
          data.details.map((detail, key) => (
            <Box key={key} w={"100%"} p={"24px"} style={{ pageBreakAfter: isLastIndex(data.details, key) ? 'always' : 'unset' }}>
              <div
                style={{
                  color: 'lightgrey'
                }}
                dangerouslySetInnerHTML={{
                  __html: `${detail}`,
                }}
              />
            </Box>
          ))
        }
      </>
    )
  

 


  return (
    <>

      {
        data.details.map((detail, key) => (
          <Box ref={divRef} key={key} w={"100%"} p={"24px"} style={{ pageBreakAfter: isLastIndex(data.details, key) ? 'always' : 'unset' }}>
            <div
              style={{
                ...style
              }}
              dangerouslySetInnerHTML={{
                __html: `${detail}`,
              }}
            />
          </Box>
        ))
      }

    </>
  );
};

function isLastIndex(arr, currentIndex) {
  return currentIndex === arr.length - 1;
}


const InnerTemplate = ({ theme, tStyle, firstTemplateData, divId }) => {
  // const firstTemplateData = useSelector((state) => state.forms);

  const docDiv = useRef(null);

  const counterRef = useRef(1)
  const [counter, setCounter] = useState(1);// should be set in redux
  useEffect(() => {

    counterRef.current = counter
  }, [counterRef.current != counter])

  const divHeightRef = useRef(null)
  const [docDivHeight, setDocDivHeight] = useState(0);

  useEffect(() => {
    if (docDiv.current) {

      const height = docDiv.current.clientHeight; // in pixels
      // Convert body height from pixels to mm (assuming 1mm = 3.78px)
      // ? totalHeightInMM = height / 3.78;
      if (docDivHeight != height) {
        setDocDivHeight(height);
      }
    }
  });


  const {
    classes: {
      First_Template__container,
      First_Template__col_1,
      First_Template__col_2,
      Name_And_Profession__container,
      Contact_Component__container,
      Contact_Component__contact_heading,
      Contact_Component__content_email__container,
      Contact_Component__content_social_links__container,
      Skill_Component__container,
      Skill_Component__skills_heading,
      Skill_Component__skill_heading,
      Skill_Component__content_container,
      Work_History_Component__heading_container,
    },
  } = tStyle;

  // const theme = useMantineTheme();

  console.log(firstTemplateData.templateType);

  return (
    // <Document>
    // <Page size={"A4"}>
    // <View>
    <Box
      ref={docDiv}
      id={divId}
      style={{
        overflowY: firstTemplateData.perviewMode ? "auto" : "hidden",
        overflowX: "hidden",
      }}
      className={First_Template__container}
      bg={"whitesmoke"}
      mah={"fit-content"}
      mih={"297mm"}
      w={"210mm"}
    >
      <Box className={First_Template__col_1}>
        <Box
          w={"15rem"}
          mih={"100px"}
          className={Name_And_Profession__container}
        >
          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.firstName
              ? firstTemplateData.personal_details.firstName
              : "Your Name"}
          </Heading1>
          <Heading1
            width={"15rem"}
            alignment={"center"}
            color={theme.colors.custom.heading1.light}
          >
            {firstTemplateData.personal_details.lastName}
          </Heading1>
          <Text color={"gray"} pt={"3px"} size={"15px"}>
            {firstTemplateData.personal_details.wantedJobTitle
              ? firstTemplateData.personal_details.wantedJobTitle
              : "Profession"}
          </Text>
        </Box>
        <Box
          w={"15rem"}
          mih={"100px"}
          mah={"fit-content"}
          className={Contact_Component__container}
        >
          <Box className={Contact_Component__contact_heading}>
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading1.light}
            >
              Contact
            </Heading2>
          </Box>
          <Box className={Contact_Component__content_email__container}>
            <Heading6 width={"15rem"} alignment={"start"} color={"whitesmoke"}>
              E-mail
            </Heading6>
            <Text align={"start"} size={"15px"} color={"whitesmoke"}>
              {firstTemplateData.personal_details.email
                ? firstTemplateData.personal_details.email
                : "a@gmail.com"}
            </Text>
          </Box>
          <Box className={Contact_Component__content_email__container}>
            <Heading6 width={"15rem"} alignment={"start"} color={"whitesmoke"}>
              Phone Number
            </Heading6>
            <Text align={"start"} size={"15px"} color={"whitesmoke"}>
              {firstTemplateData.personal_details.phoneNumber
                ? firstTemplateData.personal_details.phoneNumber
                : "+90 333 323 32 32"}
            </Text>
          </Box>
          {firstTemplateData.websiteAndSocialLinks.map((item, key) => (
            <Box className={Contact_Component__content_social_links__container}>
              <Heading6
                width={"15rem"}
                alignment={"start"}
                color={"whitesmoke"}
              >
                {item.title}
              </Heading6>
              <Text style={{
                wordBreak: 'break-word'
              }} align={"start"} size={"15px"} color={"whitesmoke"}>
                {item.link}
              </Text>
            </Box>
          ))}
        </Box>
        <Box w={"15rem"} className={Skill_Component__container}>
          <Box mb={"12px"} className={Skill_Component__skills_heading}>
            <Heading2
              width={"15rem"}
              alignment={"start"}
              color={theme.colors.custom.heading1.light}
            >
              Skills
            </Heading2>
          </Box>
          {firstTemplateData.skills.map((item, key) => {
            return (
              <Box
                w={"15rem"}
                mb={"24px"}
                pb={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                      ? ""
                      : "20px"
                }
                bg={
                  item.groupTitle === "Skill Group Title"
                    ? ""
                    : item.groupTitle === ""
                      ? ""
                      : theme.colors.custom.darker
                }
              >
                <Box
                  h={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                        ? "0"
                        : "25px"
                  }
                  w={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                        ? "0"
                        : "100%"
                  }
                  p={
                    item.groupTitle === "Skill Group Title"
                      ? "0"
                      : item.groupTitle === ""
                        ? "0"
                        : "12px"
                  }
                  className={Skill_Component__skill_heading}
                >
                  <Heading6
                    width={"15rem"}
                    alignment={"start"}
                    color={theme.colors.custom.heading1.light}
                  >
                    {item.groupTitle === "Skill Group Title"
                      ? ""
                      : item.groupTitle === ""
                        ? ""
                        : item.groupTitle}
                  </Heading6>
                </Box>
                <Box w={"15rem"}>
                  {item.skills.map((skill, key) => {
                    let beginner = "";
                    let skillFull = "";
                    let experienced = "";
                    let advance = "";

                    if (skill.level <= 20) {
                      beginner = "Beginner";
                    } else if (skill.level <= 40) {
                      skillFull = "Skillfull";
                    } else if (skill.level <= 70) {
                      experienced = "Experienced";
                    } else if (skill.level <= 100) {
                      advance = "Advance";
                    }

                    return (
                      <Box w="15rem" p={"12px"}>
                        <Box className={Skill_Component__content_container}>
                          <Heading6
                            width={"15rem"}
                            alignment={"start"}
                            color={"whitesmoke"}
                          >
                            {skill.skill}
                          </Heading6>
                          <Slider
                            size={"md"}
                            w={"100%"}
                            radius={"lg"}
                            color={skill.levelColor}
                            value={skill.level}
                            marks={[
                              { value: 20, label: beginner },
                              { value: 40, label: skillFull },
                              { value: 70, label: experienced },
                              { value: 100, label: advance },
                            ]}
                          />
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box w={"inherit"} className={Skill_Component__container}>
          {!firstTemplateData.languageSkills.length ? (
            ""
          ) : (
            <Box mb={"12px"} className={Skill_Component__skills_heading}>
              <Heading2
                width={"inherit"}
                alignment={"start"}
                color={theme.colors.custom.heading1.light}
              >
                Language Skill
              </Heading2>
            </Box>
          )}
          {firstTemplateData.languageSkills.map((item, key) => {
            let languageBeginner = "";
            let languageSkillFull = "";
            let languageExperienced = "";
            let languageAdvance = "";

            if (item.level <= 20) {
              languageBeginner = "Beginner";
            } else if (item.level <= 40) {
              languageSkillFull = "Skillfull";
            } else if (item.level <= 70) {
              languageExperienced = "Experienced";
            } else if (item.level <= 100) {
              languageAdvance = "Advance";
            }

            return (
              <Box w={"inherit"} mb={6} pb={6}>
                <Box w={"inherit"} p={"12px"}>
                  <Box className={Skill_Component__content_container}>
                    <Heading6
                      width={"inherit"}
                      alignment={"start"}
                      color={"whitesmoke"}
                    >
                      {item.title}
                    </Heading6>
                    {item.level === 0 ? (
                      ""
                    ) : (
                      <Slider
                        size={"md"}
                        w={"100%"}
                        radius={"lg"}
                        color={item.levelColor}
                        value={item.level}
                        marks={[
                          { value: 20, label: languageBeginner },
                          { value: 40, label: languageSkillFull },
                          { value: 70, label: languageExperienced },
                          { value: 100, label: languageAdvance },
                        ]}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box p={"12px"} className={First_Template__col_2}>
        <Flex direction={"column"}>
          {/* {firstTemplateData.professionalSummary.details.map((detail, key)=> {
            <Box key={key} w={"100%"} p={"24px"} style={{pageBreakAfter: isLastIndex(firstTemplateData.professionalSummary.details, key)? 'always':'unset'}}>
            <div
              style={{
                color: "lightslategray",
              }}
              dangerouslySetInnerHTML={{
                __html: `${detail}`,
              }}
            />
          </Box>
          })} */}
          {/* <Box w={"100%"} p={"24px"}>
            <div
              style={{
                color: "lightslategray",
              }}
              dangerouslySetInnerHTML={{
                __html: `${firstTemplateData.professionalSummary.details}`,
              }}
            />
          </Box> */}

          <PText data={firstTemplateData.professionalSummary} parentRef={docDiv} />

          <Box w={"100%"} p={"12px"}>
            <Box
              p={"12px"}
              className={Work_History_Component__heading_container}
            >
              <Heading3>Work History</Heading3>
            </Box>
            {firstTemplateData.employmentHistory.map((item, key) => {
              return (
                <Box w="100%" pt={"24px"}>
                  <Flex justify={"space-between"} w={"100%"}>
                    <Box w={"50%"}>
                      <Heading4>{item.jobTitle}</Heading4>
                      <Text italic>
                        {item.employer}
                        {item.city === "" ? "" : `, ${item.city}`}
                      </Text>
                    </Box>
                    <Box w={"50%"}>
                      <Flex align={"center"} w={"100%"} h={"100%"}>
                        <Text weight={"bolder"} color="#737272">
                          {`${item.startDate} - ${item.endDate}`}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Box w={"100%"} pl={48} pt={12}>
                    <div
                      style={{
                        color: "lightslategray",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `${item.details}`,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Box>
    // </View>
    // </Page>
    // </Document>
  );
};

export default FristTemplate;
