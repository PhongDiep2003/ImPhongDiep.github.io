import React from 'react'
import { Center, Box, IconButton , Flex, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import EducationBanner from '../components/EducationBanner'
import { colorTemplate } from '../style/app_styles'
const Education = () => {
  return (
    <Box 
          h={{lg: '100vh',xl:'140vh', base: '160vh'}}
          bg={colorTemplate.primary}>
      <Center 
              flexDirection={'column'}>
               <Text 
                    fontSize={{lg:'4xl', xl: '3xl',base: '4xl'}}  
                    fontWeight={'bold'}
                    color={'gray.900'} 
                    alignSelf={'center'}>
                      Education
               </Text>
            <EducationBanner 
                              imageSrc={'/sjsu.jpeg'} 
                              schoolName={'San Jose State University'} time={'• August 2021 - December 2025'} degree={"• Bachelors Of Science"} 
                              finished={false}/>
            <EducationBanner 
                              imageSrc={'/evhs.jpeg'}
                              schoolName={'Evergreen Valley High School'} time={'• August 2018 - June 2021'} 
                              degree={"• High School Diploma"} 
                              finished={true}/>
      </Center>
    </Box>
  )
}

export default Education