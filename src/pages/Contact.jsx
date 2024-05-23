import { Center, Box,Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { colorTemplate } from '../style/app_styles';
import Hamster from '../components/Hamster';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <Box  bg={colorTemplate.primary}>
      <Center>
        <Flex direction={'column'}>
            <Text 
                alignSelf={'center'} 
                fontSize={{lg:'xl', xl: 'md'}} 
                color={'gray.500'} 
                fontWeight={'bold'}>
                    Get in touch
            </Text>
            <Text 
                fontSize={{lg:'4xl', xl: '3xl', base:'4xl'}} 
                fontWeight={'bold'}
                color={'gray.900'}>
                    Contact Me
            </Text>
        </Flex>
      </Center>

        
        <Flex
              width={'100%'} height={'90%'} justifyContent={'center'} alignItems={'center'} flexDirection={{'lg': 'column', 'xl': 'row', base:'column'}}  p={{base:0, lg:10, xl: 10}} >
                <Hamster/>
                <ContactForm/>

        </Flex>
 
    </Box>
  )
}

export default Contact