import React, {} from 'react'
import { Center, Box, IconButton , Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import navigateToSection from '../utils/navigateToSection'
const ContactButton = () => {
  return (
    <Box w={150} h={20} bg={'#6CA6C1'} border={'1px solid black'} borderRadius={10} onClick={() => navigateToSection('7')} _hover={{'bg':'#327898', 'transform': 'scale(0.95)'}} transition={'0.2s ease-in-out'}>
      <Center h={'100%'}>
        <Text fontWeight={'bold'} color={'black'}>
          Contact
        </Text>
      </Center>
    </Box>
  )
}

export default ContactButton
