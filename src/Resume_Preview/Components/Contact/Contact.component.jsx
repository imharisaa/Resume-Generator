import { Box, Text, useMantineTheme } from '@mantine/core'
import React from 'react'
import { useContactComponentStyle } from './Contact.style'
import { Heading1, Heading2, Heading6 } from '../../../components/Typography/Headings'

const ContactComponent = ({ contactContainerClass, contactContainerWidth, contactContainerMinHeight, contactContainerMaxHeight, contactHeadingWidth, contactHeadingAlignment, contactHeadingColor, contantWidth, contantAlignment, contantColor, size, color }) => {
    const theme = useMantineTheme()
    const { classes: {
        Contact_Component__container
    } } = useContactComponentStyle()
  return (
    <Box w={contactContainerWidth} mih={contactContainerMinHeight} mah={contactContainerMaxHeight} className={contactContainerClass}>
        <Box>
            <Heading2 width={'15rem'} alignment={'start'} color={theme.colors.custom.first.heading2.dark} >Contact</Heading2>
        </Box>
        <Box>
            <Heading6 width={contantWidth} alignment={contantAlignment} color={contantColor}>Email</Heading6>
            <Text align={contantAlignment} size={size} color={color} >a@gmail.com</Text>
        </Box>
        <Box>
            
        </Box>
    </Box>
  )
}

export default ContactComponent